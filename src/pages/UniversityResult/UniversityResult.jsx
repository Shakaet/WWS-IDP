import React, { useEffect, useMemo, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// import ContactHome from "../component/ContactHome";
// import GetOffer from "../component/GetOffer";
import { Link } from "react-router-dom";
import ContactHome from "../../component/ContactHome";
import GetOffer from "../../component/GetOffer";

const UniversityResults = () => {
    const [universities, setUniversities] = useState([]);
    const [filters, setFilters] = useState({
        destination: "",
        course: "",
        tuitionFee: [0, 100000],
    });
    const [sortBy, setSortBy] = useState("popularity");
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // ✅ Fetch universities from API
    useEffect(() => {
        const fetchUniversities = async () => {
            setLoading(true);
            try {
                const res = await fetch("https://wws-idp-server.vercel.app/api/universities");
                const data = await res.json();
                setUniversities(data);
            } catch (err) {
                console.error("Error fetching universities:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchUniversities();
    }, []);

    // ✅ Extract filter options
    const destinations = useMemo(
        () => [...new Set(universities.map((u) => u.destination).filter(Boolean))],
        [universities]
    );

    const courses = useMemo(
        () =>
            [...new Set(universities.flatMap((u) => u.coursesOffered || []))],
        [universities]
    );

    // ✅ Tuition fee range
    const feeRange = useMemo(() => {
        const fees = universities
            .map((u) => {
                if (!u.tuitionFee) return null;
                const match = u.tuitionFee.match(/[\d,]+/g);
                return match ? match.map((n) => parseInt(n.replace(/,/g, ""))) : null;
            })
            .flat()
            .filter(Boolean);
        if (!fees.length) return [0, 0];
        return [Math.min(...fees), Math.max(...fees)];
    }, [universities]);

    const handleFilterChange = (key, value) =>
        setFilters((prev) => ({ ...prev, [key]: value }));

    const handleSortChange = (e) => setSortBy(e.target.value);

    // ✅ Filtered & sorted universities
    const filteredUniversities = useMemo(() => {
        return universities
            .filter((u) => {
                if (filters.universityName && u.universityName !== filters.universityName) return false;
                if (filters.destination && u.destination !== filters.destination) return false;
                if (filters.course && !(u.coursesOffered || []).includes(filters.course)) return false;
                if (filters.tuitionFee.length === 2) {
                    const [min, max] = filters.tuitionFee;
                    const match = u.tuitionFee?.match(/[\d,]+/g);
                    if (match) {
                        const minFee = parseInt(match[0].replace(/,/g, ""));
                        const maxFee = parseInt(match[match.length - 1].replace(/,/g, ""));
                        if (maxFee < min || minFee > max) return false;
                    }
                }
                return true;
            })
            .sort((a, b) => {
                switch (sortBy) {
                    case "name":
                        return a.universityName.localeCompare(b.universityName);
                    case "popularity":
                    default:
                        return 0;
                }
            });
    }, [universities, filters, sortBy]);

    // ✅ University Card (same design as course card)
    const renderUniversityCard = (u) => (
        <div key={u._id} className="bg-white rounded-lg mt-12 border border-gray-200 p-6 hover:shadow-md transition-all duration-200 h-full flex flex-col w-72">
            <div className="mb-4 flex-grow">
                <p className="text-gray-900 font-semibold text-sm mb-1">Destination: {u.destination}</p>
                <p className="text-gray-900 font-semibold text-sm mb-3">{u.universityName}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {(u.coursesOffered || []).map((c, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full border border-blue-100">
                            {c}
                        </span>
                    ))}
                </div>
                <p className="text-gray-600 text-sm mt-2">Tuition: {u.tuitionFee}</p>
                <p className="text-gray-500 text-xs mt-1">📍 {u.campusLocation}</p>
            </div>
            <div className="flex gap-3 mt-auto">
                <Link to={`/search-results/university-details/${u._id}`} rel="noopener noreferrer" className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    View Details
                </Link>
                <button onClick={() => setIsModalOpen(true)} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                    Contact
                </button>
            </div>
        </div>
    );

    // ✅ Render section
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Filters */}
                    <div className="w-full md:w-1/4 bg-white rounded-lg border border-gray-200 p-4">
                        <h3 className="text-gray-900 font-semibold mb-2">Filters</h3>

                        {/* Destination */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Destination</label>
                            <select value={filters.destination} onChange={(e) => handleFilterChange("destination", e.target.value)} className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm">
                                <option value="">All</option>
                                {destinations.map((d) => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </div>

                        {/* Course */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Course</label>
                            <select value={filters.course} onChange={(e) => handleFilterChange("course", e.target.value)} className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm">
                                <option value="">All</option>
                                {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>

                        {/* University Name Filter */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">University Name</label>
                            <select
                                value={filters.universityName || ""}
                                onChange={(e) => handleFilterChange("universityName", e.target.value)}
                                className="border border-gray-300 rounded-lg px-2 py-1 w-full text-sm"
                            >
                                <option value="">All</option>
                                {universities.map((u) => (
                                    <option key={u._id} value={u.universityName}>
                                        {u.universityName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Tuition Fee */}
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Tuition Fee</label>
                            <Slider range min={feeRange[0]} max={feeRange[1]} value={filters.tuitionFee} onChange={(v) => handleFilterChange("tuitionFee", v)} />
                            <div className="flex justify-between text-xs mt-1">
                                <span>${filters.tuitionFee[0]}</span>
                                <span>${filters.tuitionFee[1]}</span>
                            </div>
                        </div>
                    </div>

                    {/* University List */}
                    <div className="flex-1">
                        <div className="mb-6 sm:mb-8 flex justify-between items-center">
                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                {filteredUniversities.length} Universities Found
                            </h1>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600 text-xs sm:text-sm whitespace-nowrap">Sort by:</span>
                                <select value={sortBy} onChange={handleSortChange} className="border border-gray-300 rounded-lg px-2 py-2 text-xs sm:text-sm">
                                    <option value="popularity">Popularity</option>
                                    <option value="name">Name A-Z</option>
                                </select>
                            </div>
                        </div>

                        <GetOffer />
                        {loading ? (
                            <div className="text-center py-12">Loading...</div>
                        ) : filteredUniversities.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                                {filteredUniversities.map(renderUniversityCard)}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-500">No universities found.</div>
                        )}
                    </div>
                </div>
            </div>

            {/* Contact Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[9999] bg-white">
                    <button onClick={() => setIsModalOpen(false)} className="fixed top-4 right-4 z-[10000] bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors shadow-lg">✕</button>
                    <div className="w-full h-full overflow-x-hidden">
                        <ContactHome />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UniversityResults;

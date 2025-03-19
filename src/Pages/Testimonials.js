import { useState, useRef } from "react";
import "../Styles/Testimonials.css";
import { canadaUniversity } from "../Data/CanadaUniversity"; // Correct import
import { usUniversityData } from "../Data/UsUniversity"; // Correct import

// Combine both university lists into a single array
const universityList = [
    ...usUniversityData.Colleges.map(college => college.institution),
    ...canadaUniversity.colleges
];

function TestimonialsPage() {
    const [formData, setFormData] = useState({
        name: "",
        linkedinID: "",
        university: "",
        connectionType: "LinkedIn",
        referral_name: "",
        growthStory: "",
        currentStatus: "", // Added for storing career & academic status
        companyName: "", // Added for storing company name
        role: "", // Added for storing role
    });

    const [filteredUniversities, setFilteredUniversities] = useState([]); // Stores search results
    const [showDropdown, setShowDropdown] = useState(false); // Controls visibility of dropdown
    const debounceTimeout = useRef(null); // Store timeout ID

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "university") {
            if (value.length > 0) {
                // Clear the previous timeout to prevent multiple fast executions
                clearTimeout(debounceTimeout.current);

                // Set a new timeout to trigger after 500ms
                debounceTimeout.current = setTimeout(() => {
                    // Filter universities based on user input (case-insensitive)
                    const filtered = universityList.filter((university) =>
                        university.toLowerCase().includes(value.toLowerCase())
                    );
                    setFilteredUniversities(filtered);
                    setShowDropdown(true);
                }, 500); // 500ms debounce delay
            } else {
                setShowDropdown(false);
            }
        }
    };

    const handleSelectUniversity = (university) => {
        setFormData({ ...formData, university });
        setShowDropdown(false); // Hide dropdown after selection
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div className="page">
            <div className="form-container">
                <h2>Share Your Experience</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />

                    <label>LinkedIn ID</label>
                    <input type="text" name="linkedinID" value={formData.linkedinID} onChange={handleChange} />

                    <label>Current Professional journey</label>
                    <select name="currentStatus" value={formData.currentStatus} onChange={handleChange}>
                        <option value="Looking for Full-time">Looking for Full-time</option>
                        <option value="Graduated and have a Full-time job">Graduated and have a Full-time job</option>
                        <option value="Pursuing Master's Degree">Pursuing Master's Degree</option>
                    </select>

                    {/* Conditionally render company name and role input fields */}
                    {formData.currentStatus === "Graduated and have a Full-time job" && (
                        <>
                            <label>Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                            <label>Role</label>
                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                            />
                        </>
                    )}

                    <label>University/Institution</label>
                    <input
                        type="text"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        onFocus={() => setShowDropdown(true)}
                        onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Delay to allow clicking on options
                        placeholder="Start typing to search..."
                    />
                    {showDropdown && filteredUniversities.length > 0 && (
                        <ul className="dropdown">
                            {filteredUniversities.map((university, index) => (
                                <li key={index} onClick={() => handleSelectUniversity(university)}>
                                    {university}
                                </li>
                            ))}
                        </ul>
                    )}

                    <label>How do you know Mihir?</label>
                    <select name="connectionType" value={formData.connectionType} onChange={handleChange}>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Batchmate">Batchmate</option>
                        <option value="Colleague">Colleague</option>
                        <option value="Referral">Someone referred me</option>
                        <option value="Networking Event">Networking event</option>
                    </select>

                    {formData.connectionType === "Referral" && (
                        <>
                            <label>Name of the person (Who referred)</label>
                            <input type="text" name="referral_name" value={formData.referral_name} onChange={handleChange} />
                        </>
                    )}

                    <label>How did Mihir help you grow professionally?</label>
                    <textarea name="growthStory" value={formData.growthStory} onChange={handleChange} />

                    <button type="submit">Share Your Story</button>
                </form>
            </div>
        </div>
    );
}

export default TestimonialsPage;

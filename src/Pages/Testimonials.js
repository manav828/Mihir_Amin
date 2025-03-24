import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { canadaUniversity } from "../Data/CanadaUniversity"; 
import { usUniversityData } from "../Data/UsUniversity"; 

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
        currentStatus: "",
        companyName: "",
        role: "",
    });

    const [filteredUniversities, setFilteredUniversities] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const debounceTimeout = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "university") {
            clearTimeout(debounceTimeout.current);
            debounceTimeout.current = setTimeout(() => {
                const filtered = universityList.filter((uni) =>
                    uni.toLowerCase().includes(value.toLowerCase())
                );
                setFilteredUniversities(filtered);
                setShowDropdown(true);
            }, 500);
        }
    };

    const handleSelectUniversity = (university) => {
        setFormData({ ...formData, university });
        setShowDropdown(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <div className="row">
                     {/* Right Side - Image */}
                     <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="Images/stu_form.jpg" alt="Testimonials" className="img-fluid rounded" />
                    </div>
                    {/* Left Side - Form */}
                    <div className="col-md-6">
                        <h3 className="text-center mb-3">Share Your Experience</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-2">
                                <div className="col-md-6">
                                    <label className="form-label text-start d-block">Name</label>
                                    <input type="text" className="form-control form-control-sm" name="name" value={formData.name} onChange={handleChange} required/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label text-start d-block">LinkedIn ID</label>
                                    <input type="text" className="form-control form-control-sm" name="linkedinID" value={formData.linkedinID} onChange={handleChange} required/>
                                </div>
                            </div>

                            {/* <div className="mt-2">
                                <label className="form-label text-start d-block">University/Institution</label>
                                <input type="text" className="form-control form-control-sm" name="university" value={formData.university} onChange={handleChange} onFocus={() => setShowDropdown(true)} placeholder="Start typing..." required/>
                                {showDropdown && filteredUniversities.length > 0 && (
                                    <ul className="list-group position-absolute w-100">
                                        {filteredUniversities.map((university, index) => (
                                            <li key={index} className="list-group-item small" onClick={() => handleSelectUniversity(university)}>
                                                {university}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div> */}

<div className="mt-2 position-relative">
    <label className="form-label text-start d-block">University/Institution</label>
    <input
        type="text"
        className="form-control form-control-sm"
        name="university"
        value={formData.university}
        onChange={handleChange}
        onFocus={() => setShowDropdown(true)}
        placeholder="Start typing..."
        required
    />
    {showDropdown && filteredUniversities.length > 0 && (
        <ul 
            className="list-group position-absolute w-100" 
            style={{
                maxHeight: "200px", // Controls the max height (10 items approx)
                overflowY: "auto",  // Enables vertical scrolling
                zIndex: 1000,       // Ensures it appears above other elements
                background: "white", // Ensures visibility
                border: "1px solid #ccc",
                borderRadius: "4px"
            }}
        >
            {filteredUniversities.map((university, index) => (
                <li
                    key={index}
                    className="list-group-item small"
                    onClick={() => handleSelectUniversity(university)}
                    style={{ cursor: "pointer" }}
                >
                    {university}
                </li>
            ))}
        </ul>
    )}
</div>


                            <div className="mt-2">
                                <label className="form-label text-start d-block">Current Professional Journey</label>
                                <select className="form-control form-control-sm" name="currentStatus" value={formData.currentStatus} onChange={handleChange} required>
                                    <option value="">Select</option>
                                    <option value="Looking for Full-time">Looking for Full-time</option>
                                    <option value="Graduated and have a Full-time job">Graduated and have a Full-time job</option>
                                    <option value="Pursuing Master's Degree">Pursuing Master's Degree</option>
                                </select>
                            </div>

                            {formData.currentStatus === "Graduated and have a Full-time job" && (
                                <div className="row g-2 mt-2">
                                    <div className="col-md-6">
                                        <label className="form-label text-start d-block">Company Name</label>
                                        <input type="text" className="form-control form-control-sm" name="companyName" value={formData.companyName} onChange={handleChange} required/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-start d-block">Role</label>
                                        <input type="text" className="form-control form-control-sm" name="role" value={formData.role} onChange={handleChange} />
                                    </div>
                                </div>
                            )}

                            <div className="mt-2">
                                <label className="form-label text-start d-block">How do you know Mihir?</label>
                                <select className="form-control form-control-sm" name="connectionType" value={formData.connectionType} onChange={handleChange} required>
                                    <option value="LinkedIn">LinkedIn</option>
                                    <option value="Batchmate">Batchmate</option>
                                    <option value="Colleague">Colleague</option>
                                    <option value="Referral">Someone referred me</option>
                                    <option value="Networking Event">Networking event</option>
                                </select>
                            </div>

                            {formData.connectionType === "Referral" && (
                                <div className="mt-2">
                                    <label className="form-label text-start d-block">Name of the person (Who referred)</label>
                                    <input type="text" className="form-control form-control-sm" name="referral_name" value={formData.referral_name} onChange={handleChange} required />
                                </div>
                            )}

                            <div className="mt-2">
                                <label className="form-label text-start d-block">How did Mihir help you grow professionally?</label>
                                <textarea className="form-control form-control-sm" rows="3" name="growthStory" value={formData.growthStory} onChange={handleChange}required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mt-3">Share Your Story</button>
                        </form>
                    </div>

                   
                </div>
            </div>
        </div>
    );
}

export default TestimonialsPage;

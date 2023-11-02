const mongoose = require('mongoose');
const {Schema } = mongoose;

const VidMe_User = new Schema(
    {
        Email: { type: String, required: true },
        WantedJob: { type: String, required: true },
        Gender: { type: String, required: true },
        DOB: { type: String, required: true },
        Nationality: { type: String, required: true },
        City: { type: String, required: true },
        Country: { type: String, required: true },
        ProfessionalSummary: { type: String, required: true},
        Skills: { type: Array  },
        Interests: { type: Array },
        EmploymentHistory: { type: Object },
        Education: { type: Object  },
        Projects: { type: Object  },
        Languages: { type: Array },
        SocialLinks: { type: Array },
        Certifications: { type: Array,},
        timestamp:
        {
            type: Date,
            default: Date.now,
        },
    }
);

const UserInformation = mongoose.model('UserInformation' , VidMe_User);
module.exports = UserInformation;

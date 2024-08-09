
import nodemailer from "nodemailer";

export const actions = { 
    default: async ({ request }) => { 
        const formData = await request.formData()   

        const name = formData.get("name")
        const email = formData.get("Email")
        const company = formData.get("Company")
        const industry = formData.get("Industry")
        const message = formData.get("message")

        const formArray = [name, email, company, industry, message]

        formArray.forEach(element => {
            if(!element) { 
                console.log("needs input")
            } else { 
                console.log("Great success")
            }
        });




let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, 
    port: process.env.EMAIL_PORT,
    secure: true, 
    auth: {
    user: process.env.EMAIL_PASSWORD,
    pass: process.env.EMAIL_SMTP,
}
})

let mailOptions = { 
    from: `"Your Name" <${process.env.EMAIL_USER}>`, // Sender address
    to: 'recipient@example.com', // List of recipients
    subject: 'New Form Submission', // Subject line
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nIndustry: ${industry}\nMessage: ${message}`, // Plain text body
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Company: ${company}</p><p>Industry: ${industry}</p><p>Message: ${message}</p>` // HTML body
}

try { 
    await transporter.sendMail(mailOptions)
    return  { 
        status: 200,
        body: { 
            success: true,
            message: "Form submitted "
        }
    }
} catch (error) { 
    console.error("error sending email", error)
    return { 
        status: 500, 
        body: { 
            error: "an error occured while sending email"
        }
    }
}

}
}

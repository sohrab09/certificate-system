import React from 'react'
import CryptoJS from "crypto-js";

const LoginScreen = () => {
    const [input, setInput] = React.useState(null)

    const login = () => {
        if (!input) {
            return alert('Please enter a INPUT')
        }

        const secretKey = process.env.REACT_APP_SECRET_KEY;

        // Encrypt
        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(input), secretKey).toString();

        localStorage.setItem("token", encrypted);

        setInterval(() => {
            const bytes = CryptoJS.AES.decrypt(localStorage.getItem("token"), secretKey);
            const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

            // console.log(typeof (decrypted));

            if (decrypted) {
                decrypted === "1" ? window.location.href = '/userdashboard' : window.location.href = '/dashboard'
            }
        }, 1000)

    }

    return (
        <div className='caontainer '>
            <select onChange={(e) => setInput(e.target.value)}>
                <option value='1' disabled>Select Item</option>
                <option value='1'>User</option>
                <option value='2'>Admin</option>
            </select>
            <br />
            <br />
            <button onClick={login} className='btn btn-primary btn-lg'>Login</button>
        </div>

    )
}

export default LoginScreen
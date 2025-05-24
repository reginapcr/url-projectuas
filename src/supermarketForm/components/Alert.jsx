export default function Alert({ message, type }) {
    const alertStyles = {
        error: "bg-red-100 border-l-4 border-red-500 text-red-700",
        info: "bg-blue-100 border-l-4 border-blue-500 text-blue-700"
    };

    return (
        <div className={`mt-4 p-3 ${alertStyles[type]}`}>
            <p className="font-semibold">{message}</p>
        </div>
    );
}

//reusable component ini digunakan untuk pemanggilan 
//css komponen yang dapat digunaka ber ulang ulang untuk
// file lainnya,dimana pemanggilannya hanya menggunakan take nama component
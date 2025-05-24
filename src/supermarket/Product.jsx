export default function ProductSection() {
    return (
        <div>
            <div className="card2">
                <h1>🥦 Produk Sayuran</h1>
            </div>
            <ProductItem 
                nama="Brokoli Segar"
                harga="Rp 15.000 / kg"
                deskripsi="Brokoli hijau segar dengan kandungan gizi tinggi, cocok untuk berbagai masakan sehat."
                gambar="/img/foto4.jpg"
            />
            <ProductItem 
                nama="Wortel Organik"
                harga="Rp 10.000 / kg"
                deskripsi="Wortel kaya akan vitamin A, baik untuk kesehatan mata dan meningkatkan daya tahan tubuh."
                gambar="/img/foto5.jpg"
            />
            <ProductItem 
                nama="Bayam Hijau"
                harga="Rp 8.000 / ikat"
                deskripsi="Bayam segar kaya zat besi, sempurna untuk sup dan tumisan sehat."
                gambar="/img/foto6.jpg"
            />
            <ProductItem 
                nama="Tomat Merah"
                harga="Rp 12.000 / kg"
                deskripsi="Tomat merah segar dengan rasa manis alami, cocok untuk salad dan masakan."
                gambar="/img/foto7.jpg"
            />
            <center><BestSeller /></center>
            <center>< HealthyTips /></center>
            <BackgroundMusic/>
        </div>
    );
}

function ProductItem(props) {
    return (
        <div style={styles.card3}>
            <img src={props.gambar} alt={props.nama} style={styles.image} />
            <h3>{props.nama}</h3>
            <p>{props.deskripsi}</p>
            <strong>{props.harga}</strong>
        </div>
    );
}

function BestSeller() {
    return (
        <div>
            <h3>🔥 Best Seller</h3>
            <p>Sayuran yang paling banyak diminati pelanggan kami karena kualitas premium dan kesegarannya.</p>
            <strong>Promo: Diskon 10% untuk pembelian kedua!</strong>
        </div>
    );
}

function HealthyTips() {
    return (
        <div>
            <h3>🌱 Tips Sehat</h3>
            <p>Tambahkan lebih banyak sayuran ke dalam diet Anda untuk meningkatkan kesehatan dan daya tahan tubuh.</p>
            <strong>Tips: Kombinasikan berbagai warna sayuran untuk manfaat maksimal!</strong>
        </div>
    );
}

function SpecialOffer() {
    return (
        <div>
            <h3>🎉 Penawaran Spesial</h3>
            <p>Dapatkan diskon eksklusif untuk pelanggan setia kami setiap akhir pekan.</p>
            <strong>Gunakan kode: SAYURSEHAT untuk potongan harga 15%.</strong>
        </div>
    );
}
function BackgroundMusic() {
    return (
        <div>
            <h3>🎵 Musik Latar</h3>
            <p>Rasakan pengalaman belanja yang lebih menyenangkan dengan musik latar yang menenangkan.</p>
            <audio controls>
                <source src="/public/audio/audio.mp3" type="audio/mpeg" />
                Browser Anda tidak mendukung elemen audio.
            </audio>
        </div>
    );
}

const styles = {
    card3: {
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        textAlign: "center",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
    },
    image: {
        width: "150px",
        height: "150px",
        objectFit: "cover",
        borderRadius: "10px"
    },
}

export default function ArtikelSayur(){

    return (
        <div>
            <h1>Supermarket: Tempat Terbaik untuk Membeli Sayuran Segar</h1>
            <GreetingBinjai/>
            <FreshVegetables/>
            <HealthyVegetables/>
            <VegetableSelectionTips/>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>
            <center><img src="./img/foto.jpg" alt="logo"/></center>
            <p>Sayuran merupakan bagian penting dalam pola makan sehat karena kaya akan vitamin, mineral, dan serat yang bermanfaat bagi tubuh. 
            Mengonsumsinya secara rutin dapat membantu menjaga sistem pencernaan, meningkatkan daya tahan tubuh, serta mengurangi risiko penyakit 
            seperti diabetes dan gangguan jantung. Oleh karena itu, penting untuk memilih sayuran yang segar dan berkualitas.</p>
            
            <p>Keuntungan lainnya dari berbelanja sayuran di supermarket adalah adanya berbagai promo dan diskon yang sering ditawarkan. 
            Banyak supermarket memberikan potongan harga atau program loyalitas bagi pelanggan yang rutin berbelanja. Dengan adanya promo ini, 
            konsumen bisa mendapatkan sayuran berkualitas dengan harga yang lebih terjangkau. Selain itu, beberapa supermarket juga menawarkan layanan pesan antar, 
            di mana pelanggan bisa membeli sayuran secara online dan langsung diantarkan ke rumah.</p>
            
            <p>Dengan segala kemudahan yang ditawarkan, supermarket menjadi solusi terbaik bagi masyarakat modern yang ingin mendapatkan sayuran segar, berkualitas, dan higienis. 
            Berbagai fasilitas, sistem penyimpanan yang canggih, serta ketersediaan berbagai jenis sayuran menjadikan supermarket sebagai tempat berbelanja yang tidak hanya nyaman, 
            tetapi juga memberikan kepastian dalam menjaga pola makan sehat setiap hari.</p></small>
    )
}

function FreshVegetables() {
    return (
        <div className="card3">
        <small>
        <p style={{ fontSize: '15px', fontWeight: 'bold'}}>🌱 Mulailah Hidup Sehat Dengan Mengkonsumsi Sayuran Segar</p>
        </small>
        </div>
    );
}

function HealthyVegetables() {
    return (
        <p>🍎 Sayuran sehat yang dianjurkan untuk dikonsumsi sehari-hari meliputi:
            <ul>
                <li>🥬 Bayam - kaya zat besi yang baik untuk darah.</li>
                <li>🥦 Brokoli - tinggi serat dan antioksidan.</li>
                <li>🥕 Wortel - mengandung beta-karoten yang baik untuk kesehatan mata.</li>
                <li>🍅 Tomat - sumber vitamin C dan likopen untuk kesehatan kulit.</li>
                <li>🌽 Jagung - kaya karbohidrat alami sebagai sumber energi.</li>
            </ul>
        </p>
    );
}

function VegetableSelectionTips() {
    return (
        <p>🌼 Ciri-ciri sayuran segar yang berkualitas:
            <ul>
                <li>✅ Warna cerah dan alami, tidak pucat.</li>
                <li>✅ Tekstur renyah dan tidak layu.</li>
                <li>✅ Bebas dari bercak cokelat atau bintik hitam.</li>
                <li>✅ Tidak berbau busuk atau menyengat.</li>
                <li>✅ Daun dan batang masih segar tanpa tanda-tanda layu.</li>
            </ul>
        </p>
    );
}






export default function QnASection() {
    return (
        <div>
            <hr />
            <div className="card3">
                <h1>QnA Section</h1>
            </div>
            <UserCard 
                Q="Mengapa penting mengonsumsi sayuran setiap hari?" 
                A="Sayuran mengandung vitamin, mineral, dan serat yang mendukung kesehatan tubuh dan sistem pencernaan." 
            />
            <UserCard 
                Q="Bagaimana cara memilih sayuran yang segar?" 
                A="Pilih yang memiliki warna cerah, tekstur renyah, dan tidak memiliki bercak cokelat atau bintik hitam." 
            />
            <UserCard 
                Q="Apa keuntungan membeli sayuran di supermarket?" 
                A="Supermarket menyediakan sayuran dengan sistem penyimpanan modern, memastikan kualitas dan kesegarannya." 
            />
            <UserCard 
                Q="Apa perbedaan sayuran organik dan non-organik?" 
                A="Sayuran organik bebas dari pestisida dan bahan kimia, sementara non-organik mungkin menggunakan pestisida dalam proses pertumbuhan." 
            />
            <UserCard 
                Q="Sayuran apa saja yang baik untuk dikonsumsi setiap hari?" 
                A="Beberapa sayuran yang baik dikonsumsi setiap hari adalah bayam, brokoli, wortel, tomat, dan jagung karena kandungan nutrisinya yang tinggi." 
            />
            <FeedbackForm/>

            <div className="review-section">
                <h4>Ulasan Pelanggan</h4>
                <CustomerReview 
                    name="Budi Santoso" 
                    review="Sayuran di supermarket ini sangat segar dan berkualitas tinggi. Saya selalu puas berbelanja di sini!" 
                    rating={5}
                />
                <CustomerReview 
                    name="Siti Rahmawati" 
                    review="Banyak pilihan sayuran organik yang sangat bagus untuk keluarga saya. Harganya juga cukup bersaing!" 
                    rating={4}
                />
                <CustomerReview 
                    name="Andi Pratama" 
                    review="Pelayanan di bagian sayuran sangat ramah dan membantu. Saya jadi lebih mudah memilih sayuran terbaik!" 
                    rating={5}
                />
            </div>
        </div>

    );
}

function UserCard(props) {
    return (
        <div>
            <hr />
            <h3>Q: {props.Q}</h3>
            <p>A: {props.A}</p>
        </div>
    );
}

function FeedbackForm() {
    return (
        <div className="feedback-form">
            <h2>Beri Pendapat Anda</h2>
            <input type="text" placeholder="Masukkan pendapat Anda tentang sayuran di sini..." className="input-box stylish-input" style={{ width: '95%', padding: '12px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}/>
            <div className="button-container" style={{ display: 'flex', gap: '10px' }}>
                <button className="submit-button enhanced-button stylish-button small-button" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontSize: '14px', flex: '1' }}>🌱 Kirim Pendapat</button>
                <button className="submit-button enhanced-button stylish-button small-button" style={{ backgroundColor: '#2196F3', color: '#fff', padding: '10px 20px', borderRadius: '5px', fontSize: '14px', flex: '1' }}>📩 Masukkan</button>
            </div>
        </div>
    );
}

function CustomerReview({ name, review, rating }) {
    return (
        <div className="review-card">
            <h3>{name}</h3>
            <p>"{review}"</p>
            <p>Rating: {'⭐'.repeat(rating)}</p>
        </div>
    );
}








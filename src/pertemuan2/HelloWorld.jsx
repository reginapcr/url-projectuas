export default function HelloWorld(){

    const propsUserCard = {
        nama : "Goku" ,
        nim: "999999",
        tanggal: "2025-01-01" ,
        hobi : "Main Game"

    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>

            <UserCard
               nama="Regina" 
               nim="235730111"
               tanggal={new Date().toLocaleDateString()}
               Hobi = "Mengaji" 
             /> 
             
             <UserCard {...propsUserCard}/>

             <img src="./img/gambar1.jpg" alt="logo"/>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>Salam Dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
            <GreetingBinjai/>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p> NIM: {props.nim}</p>
            <p> Tanggal: {props.tanggal}</p>
            <p> Hobi: {props.hobi}</p>
        </div>
    )
}
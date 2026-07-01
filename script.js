*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    background:linear-gradient(135deg,#0f172a,#2563eb);
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:40px;
    transition:.4s;
}

.container{
    width:900px;
    max-width:95%;
    background:rgba(255,255,255,.12);
    backdrop-filter:blur(12px);
    border-radius:20px;
    padding:40px;
    box-shadow:0 10px 30px rgba(0,0,0,.3);
    color:white;
}

.hero{
    text-align:center;
}

.profile-picture{
    width:180px;
    height:180px;
    border-radius:50%;
    object-fit:cover;
    border:6px solid white;
    margin-bottom:20px;
    transition:.4s;
}

.profile-picture:hover{
    transform:scale(1.05);
}

h1{
    font-size:40px;
    margin-bottom:10px;
}

h3{
    color:#dbeafe;
    margin-bottom:15px;
}

#clock{
    margin-bottom:20px;
    font-size:18px;
    color:#f8fafc;
}

#darkModeBtn{
    padding:12px 25px;
    border:none;
    border-radius:10px;
    background:white;
    color:#2563eb;
    font-weight:bold;
    cursor:pointer;
    transition:.3s;
}

#darkModeBtn:hover{
    transform:scale(1.05);
}

.section{
    margin-top:40px;
}

.section h2{
    margin-bottom:20px;
    border-left:5px solid white;
    padding-left:10px;
}

.section p{
    line-height:1.8;
}

ul{
    list-style:none;
}

ul li{
    background:rgba(255,255,255,.15);
    margin:10px 0;
    padding:12px;
    border-radius:10px;
    transition:.3s;
}

ul li:hover{
    transform:translateX(8px);
}

.tech{
    display:flex;
    flex-wrap:wrap;
    gap:15px;
}

.tech span{
    background:white;
    color:#2563eb;
    padding:10px 18px;
    border-radius:30px;
    font-weight:bold;
    transition:.3s;
}

.tech span:hover{
    transform:scale(1.1);
}

.bar{
    width:100%;
    background:#d1d5db;
    border-radius:20px;
    margin-bottom:20px;
    overflow:hidden;
}

.bar div{
    height:25px;
    line-height:25px;
    text-align:right;
    padding-right:10px;
    color:white;
    font-weight:bold;
}

.html{
    width:90%;
    background:#e44d26;
}

.css{
    width:85%;
    background:#264de4;
}

.js{
    width:70%;
    background:#f7df1e;
    color:black !important;
}

.git{
    width:75%;
    background:#f1502f;
}

form{
    display:flex;
    flex-direction:column;
    gap:15px;
}

input,
textarea{
    padding:12px;
    border:none;
    border-radius:10px;
    font-size:16px;
}

textarea{
    resize:none;
    height:120px;
}

.sendBtn{
    padding:14px;
    border:none;
    border-radius:10px;
    background:#10b981;
    color:white;
    font-size:17px;
    cursor:pointer;
    transition:.3s;
}

.sendBtn:hover{
    background:#059669;
}

#successMessage{
    margin-top:15px;
    font-weight:bold;
    color:#bbf7d0;
}

.dark-mode{
    background:#111827;
}

.dark-mode .container{
    background:#1f2937;
}

.dark-mode .tech span{
    background:#374151;
    color:white;
}

.dark-mode ul li{
    background:#374151;
}

.dark-mode input,
.dark-mode textarea{
    background:#374151;
    color:white;
}

.dark-mode #darkModeBtn{
    background:#2563eb;
    color:white;
}

@media(max-width:768px){

    .container{
        padding:25px;
    }

    h1{
        font-size:30px;
    }

    .profile-picture{
        width:140px;
        height:140px;
    }

    .tech{
        justify-content:center;
    }

}

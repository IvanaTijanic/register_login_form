<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ivana Tijanic</title>
    <style>
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    body{

        text-align:center;

    }
    .body_img{
        position:relative;
        width:100%;
        height:100vh;
    }
    .success{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
    }
    .success_welcome{
        font-size:65px;
        font-weight: 600;
        letter-spacing: 1.2px;
    }
    .success_made{
        font-size:30px;
    }
    .success_atag{
        text-decoration:none;
        font-size:18px;
        margin-top:15px;
        border-radius:8px;
        padding:10px 15px;
        background-color:#fff;
        color:#e402c5;
        text-transform:uppercase;
    }
    .success_atag:hover{
        background-image: linear-gradient(to right, #ff00d3, #e402c5, #c902b6, #b001a7, #970097);
        color:#fff;
    }
    </style>
</head>
<body>

    <img src="img-wel.jpg" class="body_img" alt="Ivana Tijanic">
    <div class="success">
        <p class="success_welcome">Welcome!</p>
        <p class="success_made">Your aconut has been made. </p><br>


        <a href="#" class="success_atag">login</a>
    </div>
</body>
</html>

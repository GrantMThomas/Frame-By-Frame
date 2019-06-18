<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php include 'nav.php' ?>
    <div id = "main">
        <div id = "title">
            <h1>Add a frame</h1>
        </div>
        <div id = "animate">
            <div id = "painttools">
                <div><button id="clear" class="btn-primary">Clear</button></div>
                <div>
                    <img src = "images/color.png" class = "icon" >
                    <input class = "jscolor toolbar" onchange = "update(this.jscolor)" value = "000000">
                </div>
                <div>
                    <img src = "images/radius.png" class = "icon">
                    <input class = "toolbar" type="number" name="quantity" min="1" value = "5" onchange="changeSize(this.value)">
                </div>
            </div>
            <div id="canvasDiv" class = "add">
                <canvas id= "canvas" class = "edit"></canvas>
            </div>
            <button class="btn btn-dark my-2 my-sm-0 go plus" type="submit" >+</button> 
        </div>
    </div>
</body>
<script src= "http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script type="text/javascript" src="script.js"></script>
<script src="jscolor.js"></script>

</html>
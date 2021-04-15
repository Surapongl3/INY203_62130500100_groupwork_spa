<template>
    <header>
        <h1>
            The<strong>Cat</strong>picture
        </h1>
    </header>
    <div class="container">
    <div class="like">
        <button class="liked">love it</button>
    </div>
    <div class="not-like">
        <button class="not-liked">nope it</button>
    </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {

}
</script>

<style language="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Avenir, Helvetica, Arial, sans-serif;
}
a {
    text-decoration: none;
}
header {
    padding-top: 50px;
    padding-bottom: 50px;
}
header h1 {
    color: #888;
    font-size: 42px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
}
header strong {
    color: #313131;
}
header :hover {
    color: #313131;
}
button.liked {
    width:100px;
    font-size: 30px;
    background-color: green;
}
.like :hover {
    background-color: #03631e;
}
button.not-liked {
    
    width:100px;
    font-size: 30px;
    background-color: red;
}
.not-like :hover {
    background-color: #be0205;
}
.container {
    display:flex;
    justify-content:center;
    gap: 20px;
}
</style>

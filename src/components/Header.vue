<template>
    <div class="container">
    <div class="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact us</a>
    </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>
<style scoped>
    .nav {
        background-color: black;
        position: relative;
        width: auto;
        height: 50px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .nav a{
        color: white;
        padding: 14px 16px;
        text-align: center;
        font-size: 17px;
        margin: 4px;
        text-decoration: none;
    }
    .nav a:hover {
        background: #ddd;
        color: #333;
    }
</style>
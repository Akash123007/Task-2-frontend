<template>
    <div class="container">
    <div class="footer">
        <a href="#">Contact Info</a>
        <a href="#">About</a>
        <a href="#">Admin</a>
    </div>
    </div>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>
<style scoped>
    .footer {
        background-color: black;
        position: absolute;
        bottom: 0;
        width: 1110px;
        height: 50px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .footer a{
        color: white;
        padding: 14px 16px;
        text-align: center;
        font-size: 17px;
        margin: 4px;
        text-decoration: none;
    }
    .footer a:hover {
        background: #ddd;
        color: #333;
    }
</style>
<template>
    <div>
        <div class="container">
  <div class="avatar-flip">
    <!-- <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" height="150" width="150"> -->
    <!-- <img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" height="150" width="150"> -->
  </div>
  <h2>AKASH SONKAMBLE</h2>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, incidunt. </p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam pariatur, cumque quia placeat fugit aut perspiciatis! Aperiam, error fuga.</p>
</div>
    </div>
</template>

<script>
export default {
    name:'ProfileComponent'
}
</script>

<style scoped>
    body {
  background-color: #f0f0f0;
  font-family: roboto;
}
.container {
  width: 400px;
  margin: 120px auto 120px;
  background-color: #fff;
  padding: 0 20px 20px;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.075);
  -webkit-box-shadow: 0 2px 5px rgba(0,0,0,0.075);
  -moz-box-shadow: 0 2px 5px rgba(0,0,0,0.075);
  text-align: center;
}


.avatar-flip {
  border-radius: 100px;
  overflow: hidden;
  height: 150px;
  width: 150px;
  position: relative;
  margin: auto;
  top: -60px;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  box-shadow: 0 0 0 13px #f0f0f0;
  -webkit-box-shadow: 0 0 0 13px #f0f0f0;
  -moz-box-shadow: 0 0 0 13px #f0f0f0;
}


h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}
h4 {
  font-size: 13px;
  color: #00baff;
  letter-spacing: 1px;
  margin-bottom: 25px
}
p {
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 20px;
  color: #666;
}
</style>
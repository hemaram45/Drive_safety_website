<?php session_start(); ?>
<header>
  <div class="logo">DriveSafely</div>
  <div class="user-info">
    <?php
    if(isset($_SESSION['username'])) {
        echo "Welcome, " . $_SESSION['username'] . " | <a href='logout.php'>Logout</a>";
    } else {
        echo "<a href='login.html'>Login</a> | <a href='Register.html'>Register</a>";
    }
    ?>
  </div>
</header>

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('check');
    const sidebar = document.querySelector('.sidebar_menu');
    const closeBtn = document.querySelector('.btn_two');
  
    // Function to open sidebar menu
    function openSidebar() {
      sidebar.style.left = '0';
    }
  
    // Function to close sidebar menu
    function closeSidebar() {
      sidebar.style.left = '-300px';
    }
  
    // Event listener for menu button click
    menuBtn.addEventListener('click', () => {
      if (menuBtn.checked) {
        openSidebar();
      } else {
        closeSidebar();
      }
    });
  
    // Event listener for close button click
    closeBtn.addEventListener('click', () => {
      closeSidebar();
    });
  });
  
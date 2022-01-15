onload = () => {
    let countClick = false;
    function clickMenu() {
        countClick = !countClick;
        if (countClick == true)
            document.getElementsByClassName(`burger__button`)[0].style.display = 'block';
        else if (countClick == false)
            document.getElementsByClassName(`burger__button`)[0].style.display = 'none';
    }






}
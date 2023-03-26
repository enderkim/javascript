
window.onload = function () { //요소 준비시키기
    var element = document.getElementById("scrollobj"); //요소 불러오기
    var originalHeight = element.offsetHeight; //기존 너비를 저장

    window.addEventListener("scroll", function () { //스크롤 이벤트에 리스너 추가하기
        var currentHeight = element.offsetHeight; //현재 너비를 계산
        var newHeight = currentHeight; // 새로운 너비 계산

        if (window.scrollY > 0) { // 만약 스크롤 위치가 0보다 크다면,
            newHeight = Math.max(originalHeight - window.scrollY, 0); //스크롤 위치 한 만큼을 너비에 뺀다(요소 너비 감소)
        } else { // 아니면(스크롤 위치가 0이면)
            newHeight = originalHeight; // 오리지날 너비, 원래 너비를 불러온다
        }

        element.style.height = newHeight + "px"; //선택한 요소의 너비를 새로운 너비 값으로 업데이트
        //스크롤 위치에 따라 요소의 너비가 동적으로 변화하도록 할 수 있다
    })};
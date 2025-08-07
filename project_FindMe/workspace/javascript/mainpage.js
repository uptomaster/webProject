document.querySelectorAll(".action-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("참가 요청이 전송되었습니다.");
  });
});

document.querySelectorAll(".cta-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("기능 준비 중입니다.");
  });
});

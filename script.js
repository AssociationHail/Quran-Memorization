function checkForm() {
  const inputs = document.querySelectorAll("input");

  for (let input of inputs) {
    if (input.value.trim() === "") {
      alert("الرجاء تعبئة جميع البيانات قبل الإرسال");
      return false; // يوقف الإرسال
    }
  }

  alert("تم إرسال طلب التسجيل بنجاح!");
  return true; // يسمح بالإرسال
}

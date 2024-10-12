  // تحقق مما إذا كان Local Storage مدعومًا
  if (typeof(Storage) !== "undefined") {
    // الحصول على قيمة عداد الزوار الحالية
    let visitorCount = localStorage.getItem('visitorCount');

    // إذا لم يكن هناك قيمة مخزنة، قم بتهيئة العداد بـ 0
    if (visitorCount === null) {
        visitorCount = 0;
    }

    // زيادة العداد بمقدار 1
    visitorCount++;

    // تحديث القيمة في Local Storage
    localStorage.setItem('visitorCount', visitorCount);

    // عرض العداد المحدث في العنصر
    document.getElementById('visitorCount').innerText = visitorCount;
} else {
    // إذا لم يكن Local Storage مدعومًا، عرض رسالة للمستخدم
    document.getElementById('visitorCount').innerText = "Local Storage غير مدعوم في هذا المتصفح.";
}
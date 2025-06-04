const Home = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-5xl font-bold mb-6 text-gray-800">مرحباً بكم في موقعي</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        موقع شخصي حديث مبني بأحدث تقنيات الويب
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">تصميم عصري</h3>
          <p className="text-gray-600">تصميم جذاب وسهل الاستخدام</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">تجاوب كامل</h3>
          <p className="text-gray-600">يعمل على جميع الأجهزة والشاشات</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">أداء عالي</h3>
          <p className="text-gray-600">سرعة تحميل وسهولة في الاستخدام</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 
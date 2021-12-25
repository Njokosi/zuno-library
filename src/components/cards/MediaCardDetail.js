import React from 'react'

function checkEmpty(s){
    if (s == null || s == undefined || s.length == 0) return '---'
    return s
}
const MediaCardDetail = ({
  title,
  author,
  subjects,
  isbn,
  publisher,
  publicationyear,
  itemtype,
}) => {
  return (
    <div
      className="flex flex-col px-4 pt-0 pb-4 mt-32 md:px-10 md:pb-12"
      style={{ background: "#F7F7FB" }}
    >
      <a href="/course/whats-new-in-php-8">
        <img
          className="object-cover w-full max-w-md -mt-8 rounded"
          src="https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </a>

      <div>
        <h2 className="inline-block px-2 my-8 font-medium border rounded-lg border-slate-500 ">
          Available
        </h2>
        <h3 className="-mt-2 text-2xl font-bold text-slate-900">{title}</h3>
        <div className="flex items-center text-slate-600">
          <span>by</span>
          <a className="mx-1 text-sky-600">{checkEmpty(author)}</a>
          <span className="font-extralight text-slate-400">(Author)</span>
        </div>

        <hr className="my-8 border-slate-300" />
        <p className="font-normal leading-6 text-slate-600">
          Subjects: {subjects}
        </p>
        <hr className="my-8 border-dashed border-slate-300" />
        <div className="grid grid-cols-4 gap-12">
          <div>
            <h3 className="text-sm font-medium text-gray-900">ISBN</h3>
            <p className="text-sm text-gray-600">{checkEmpty(isbn)}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Publisher</h3>
            <p className="text-sm text-gray-600">{checkEmpty(publisher)} </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">
              Publication year
            </h3>
            <p className="text-sm text-gray-600">
              {checkEmpty(publicationyear)}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900">Type</h3>
            <p className="text-sm text-gray-600">{checkEmpty(itemtype)} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCardDetail

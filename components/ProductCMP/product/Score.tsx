
function Score({Star}: {Star: Function}):JSX.Element {

  return (
    <div className="flex space-x-1">
      {<Star width={24} className={' fill-gray-300'}/>}
      {<Star width={24} className={' fill-gray-300'}/>}
      {<Star width={24} className={' fill-gray-300'}/>}
      {<Star width={24} className={' fill-gray-300'}/>}
      {<Star width={24} className={' fill-gray-300'}/>}
    </div>
  )

}

export default Score;
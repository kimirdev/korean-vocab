const Line = ({leftText, rightText}: {leftText?: string, rightText?: string}) => {
  return (
    <div className='group flex justify-between border-b hover:border-black hover:dark:border-white'>
      <p className='group-hover:font-semibold break-keep mr-3'>{leftText ?? ""}</p>
      <p className='group-hover:font-semibold text-end'>{rightText ?? ""}</p>
    </div>
  )
}

export default Line
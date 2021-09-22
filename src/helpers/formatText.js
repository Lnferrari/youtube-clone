const formatText = text => {
  const formatedText = text.split(' ').map(
    x => x.startsWith('http') ?
    <a href={x}>{x}</a> : <span> {x} </span>
  )
  return formatedText
}

export default formatText
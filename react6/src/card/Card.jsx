import Icon from "../icon/Icon"

function Card({player}) {
    let icon = <Icon/>
    if(player == "X"){
        icon = <Icon name= "cross" />
    }else if(player == "O"){
        icon = <Icon name= "circle"/>
    }
  return (
  <>
   {icon}
   </>
  )
}

export default Card
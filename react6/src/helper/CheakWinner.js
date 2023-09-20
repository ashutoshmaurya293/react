function CheakWinner(board,symble) {
  if(board[0] == board[1] && board[1] == board[2] && board[2] ==symble)return symble;
  if(board[3] == board[4] && board[4] == board[5] && board[5] ==symble)return symble;
  if(board[6] == board[7] && board[7] == board[8] && board[8] ==symble)return symble;

  if(board[0] == board[3] && board[3] == board[6] && board[6] ==symble)return symble;
  if(board[1] == board[4] && board[4] == board[7] && board[7] ==symble)return symble;
  if(board[2] == board[5] && board[5] == board[8] && board[8] ==symble)return symble;

  if(board[0] == board[4] && board[4] == board[8] && board[4] ==symble)return symble;
  if(board[2] == board[4] && board[4] == board[6] && board[4] ==symble)return symble;
  return ""
}

export default CheakWinner
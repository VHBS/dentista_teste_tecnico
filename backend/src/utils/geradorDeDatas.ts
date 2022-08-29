const criarDataFormatadaISO = (data?: string) => {
  let novaData;
  if (data) {
    novaData = new Date(data);
  } else {
    novaData = new Date();
  }
  const dia = novaData.getDate();
  const month = (novaData.getMonth() + 1).toString().padStart(2, '0');
  const ano = novaData.getFullYear();
  return `${ano}-${month}-${dia}`;
};

export default criarDataFormatadaISO;

function jugar(opcionUsuario) {
    var opciones = ["piedra", "papel", "tijera"];
    var opcionMaquina = opciones[Math.floor(Math.random() * 3)];
    
    var resultado = "";
    
    if (opcionUsuario === opcionMaquina) {
      resultado = "Empate";
    } else if (
      (opcionUsuario === "piedra" && opcionMaquina === "tijera") ||
      (opcionUsuario === "papel" && opcionMaquina === "piedra") ||
      (opcionUsuario === "tijera" && opcionMaquina === "papel")
    ) {
      resultado = "Ganaste";
    } else {
      resultado = "Perdiste";
    }
    
    alert("Elegiste " + opcionUsuario + ". La máquina eligió " + opcionMaquina + ".\n\n" + resultado);
  }
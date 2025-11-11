export function getFinalState(baseState, queue) {
    let finalState = baseState;
  
    // TODO: haz algo con la cola...
    for (let elemento of queue) {
      if (typeof elemento === 'function') {
        finalState = elemento(finalState)
      } else{
        finalState = elemento
      }
    }
  
    return finalState;
  }
  
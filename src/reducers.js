const initialState = {
  selectedSkill: null
}

// Top-level reducer.
export function gameApp(state = loadGame(), action) {
  switch (action.type) {
    default:
      return state
  }
}

function loadGame() {
  var loadedState = JSON.parse(localStorage.getItem('saved_game'))
  if (loadedState == null) {
    return initialState;
  } else {
    return loadedState;
  }
}

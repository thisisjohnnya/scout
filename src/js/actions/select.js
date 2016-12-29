export const selectPlayer = (player) => {
    console.log('testing: ', player.first);
    return {
        type: "PLAYER_SELECTED",
        payload: player
    }
};

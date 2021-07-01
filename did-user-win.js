export function didUserWin(player, computer) {
    let result;
    switch (player + computer) {
        case 'rockpaper':
            result = 'loss';
            break;
        case 'rockscissors':
            result = 'win';
            break;
        case 'rockrock':
            result = 'draw';
            break;
        case 'paperrock':
            result = 'win';
            break;
        case 'paperscissors':
            result = 'loss';
            break;
        case 'paperpaper':
            result = 'draw';
            break;
        case 'scissorsrock':
            result = 'loss';
            break;
        case 'scissorspaper':
            result = 'win';
            break;
        case 'scissorsscissors':
            result = 'draw';
            break;
        default:
    }
    return result;
}
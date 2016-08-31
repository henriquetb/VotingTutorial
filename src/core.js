import {List, Map} from 'immutable';

export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

export function next(state) {
  const entries = state.get('entries')
      .concat(getWinners(state.get('vote')));

  if (entries.size === 1){
    /* Should not do this because it may affect other state values that should't be changed!
    return Map({
      winner: entries.first()
    });*/
    return state.remove('vote')
        .remove('entries')
        .set('winner', entries.first());
  }
  return state.merge({
      vote: Map({
        pair: entries.take(2)
      }),
      entries: entries.skip(2),
  });
}

function getWinners(vote){
  if (!vote) return [];
  const [a, b] = vote.get('pair');
  const aVotes = vote.getIn(['tally', a], 0);
  const bVotes = vote.getIn(['tally', b], 0);
  if (aVotes > bVotes) return [a];
  if (aVotes < bVotes) return [b];
  return [a,b];
}

export function vote(state, entry) {
  /*Should really learn Immutable!!!
  const newValue = state.get('vote').get('tally').get(entry) + 1 || 1;
  return state.merge({
      vote: state.get('vote').merge({
          tally: state.get('vote').get('tally').merge({
              entry: newValue
          })
      })
  });*/

  return state.updateIn(
      ['vote', 'tally', entry],
      0,
      votes => votes + 1
  );
}
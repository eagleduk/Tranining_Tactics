import styled from "styled-components";

export function play(fn, ms = 2000) {
  return new Promise((resolve, reject) => {
    if (typeof fn === "function") fn();
    setTimeout((e) => {
      resolve();
    }, ms);
  }).catch((err) => console.log("play ", err));
}

export function tacticsActions(locations, references) {
  return locations.map((position) => {
    return references.map((reference, index) => {
      return {
        target: reference,
        action: (reference) => {
          const [left, top] = position?.[index];
          reference.current.style.left = `${left}%`;
          reference.current.style.top = `${top}%`;
        },
      };
    });
  });
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  gap: 5px;
  justify-content: center;
`;

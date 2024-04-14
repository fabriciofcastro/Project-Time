import { Play } from "phosphor-react";
import { ButtonStartCount, CountContainer, FormContainer, HomerContainer, MinutesAmountInput, Separator, TaskInput } from "./style";

export const Home = () => {
  return (
    <HomerContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em </label>
          <TaskInput type="text" list="task-suggestions" id="task" placeholder="Dê um nome para  seu projeto" />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />

          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" step={20} min={5} max={60}/>

          <span>minutos.</span>
        </FormContainer>

        <CountContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>

        </CountContainer>

        <ButtonStartCount disabled type="submit">
          <Play size={ 24 } />
          Começar
        </ButtonStartCount>
      </form>


    </HomerContainer>
  )

}

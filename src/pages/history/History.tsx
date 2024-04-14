import { HistoryContainer, HistoryList } from './style'

export const History = () => {
  return (
    <HistoryContainer>

      <HistoryList>
        <table>
          <thead>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutoos</td>
              <td>Há dois meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutoos</td>
              <td>Há dois meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutoos</td>
              <td>Há dois meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutoos</td>
              <td>Há dois meses</td>
              <td>Concluído</td>
            </tr>

            <tr>
              <td>Tarefa</td>
              <td>20 Minutoos</td>
              <td>Há dois meses</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>

      </HistoryList>
    </HistoryContainer>
  )
}

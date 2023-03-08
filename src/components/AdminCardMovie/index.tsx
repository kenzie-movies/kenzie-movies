import vingadores from "../../assets/vingadores.svg";
import { StyledButton, StyledContainer } from "./style";

//componente do card de aceitar solicitação de filme

function AdminCardMovie() {
  return (
    <StyledContainer>
      <ul>
        <li>
          <div>
            <img src={vingadores} alt="" />
          </div>
          <div>
            <h2>Nome: Doutor Estranho no Multiverso da Loucura</h2>
            <p>Duração: 2 horas e 6 minutos</p>
            <p>Categoria: Ação</p>
            <p>Data de Lançamento: 2 de maio de 2022</p>
            <p>
              Sinopse: Em Doutor Estranho no Multiverso da Loucura, após
              derrotar Dormammu e enfrentar Thanos nos eventos de Vingadores:
              Ultimato, o Mago Supremo, Stephen Strange (Benedict Cumberbatch),
              e seu parceiro Wong (Benedict Wong), continuam suas pesquisas
              sobre a Joia do Tempo. Mas um velho amigo que virou inimigo coloca
              um ponto final nos seus planos e faz com que Strange desencadeie
              um mal indescritível, o obrigando a enfrentar uma nova e poderosa
              ameaça.
            </p>

            <StyledButton>
              <button>Aceitar</button>
              <button>Rejeitar</button>
            </StyledButton>
          </div>
        </li>
      </ul>
    </StyledContainer>
  );
}

export default AdminCardMovie;

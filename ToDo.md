
----------------------------------DOING-----------------------------------------
-- GERAL
[x] - Criar isAdmin no user no Strapi como boolean
[x] - Pagina semestre vai ser apenas para usuario admin
-- AMBIENTES
[x] - Criar CRUD em ambientes para o usuario admin
-- HOME
[x] - Criar tela
[x] - Popular imagens e escrever textos
-- CALENDARIO
[x] - Bug em reservas semestrais quando muda de semestre
-- SEMESTRES
[x] - Criar tela
[x] - Criar CRUD de semestres
[x] - Regra data final sempre tem que ser maior que a data inicial
[x] - Ao colocar um semestre como atual, todos os outros tem que atualizar para false
-- USUARIOS
[x] - Criar tela
[x] - Criar CRUD de usuarios
[] - Criar Filtros
--------------------------------------------------------------------------------

------------------------------------DO------------------------------------------
-- GERAL
[] - Atualizar o Next
[] - Comecar a utilizar o react-query para fetch de dados e fazer menos reqs e deixar dados em cache
-- AMBIENTES
[] - Criar input de pesquisa
--------------------------------------------------------------------------------

-----------------------------------DONE-----------------------------------------
-- CALENDARIO
[x] - Se tiver um filtro no calendar por sala, o modal vim com a sala ja preenchida
[x] - Esquema de mudar de cor a reserva
[x] - Adicionou visualizacao de Agenda
[x] - Quando nao estiver logado trazer so as reservar aprovadas
[x] - Quando aprovar uma solicitacao mudar o estado para aprovado no calendario
[x] - Mudar nome "Calendário" para "Reservar"
[x] - Deixar o filtro ativo como default no Calendario
[x] - Bloquear botao filtro para sem filtros
[x] - Bug em reservas semestrais quando muda de semestre
-- SOLICITACAO
[x] - Mudar o Status para mais proximo das actions
[x] - Tooltip para quando uma solicitacao for aprovada e reprovada
[x] - Na reprovacao, adicionar um campo de input para motivo da reprovacao da solicitacao
[x] - Icone do Status mais nome
[x] - Criar campo novo para motivo de reprovacao no banco
[x] - Filtro ativo do lado de fora, com a opção de tirar o filtro
-- AMBIENTES
[x] - Adicionar a opcao de Sala, ficando: Lab, Sala e Outros no frontend e backend
[x] - Filtro ativo do lado de fora, com a opção de tirar o filtro
-- LOGIN
[x] - Mudar nome Salvar para Acessar
--------------------------------------------------------------------------------

---------------------------------STANDBY----------------------------------------
[] - Bloquear mexer no campo inicio e fim no modal de cadastro
[] - Quando tiver mais de 3 reservas no mesmo horario, aparecer um botao q vai para o visualizacao de dia no semana
[] - Configuracao de horarios no calendario:
      Configuracao de calendario no backend
        - Mudar Perfil IFBA
        - Definir os horarios:
            Manha
              7:10
              8:00
              8:50
              9:40
              10:30
              10:50
              11:40
            Tarde
              13:00
              13:50
              14:40
              15:30
              16:20
              16:40
              17:30
            Noite
              18:30
              19:20
              20:10
              20:20
              21:10
--------------------------------------------------------------------------------
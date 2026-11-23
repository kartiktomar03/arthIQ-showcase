const stages = [
  ['Natural language question','Ask a business question in the ledger. A supported follow-up carries the analytical context of its conversation.'],
  ['Hybrid Schema RAG','Match identifiers and curated business terms alongside semantic similarity. Required table relationships come from the authorized PostgreSQL foreign-key graph.'],
  ['Qdrant retrieval','Search MiniLM embeddings of schema metadata and metric definitions within the selected datasource and schema version. The 1,550,922 Olist transaction and reference rows stay in PostgreSQL.'],
  ['Groq SQL generation','Send the question and retrieved context to the hosted model. Its structured response proposes a PostgreSQL SELECT or indicates that it cannot answer.'],
  ['SQLGlot validation','Parse the proposal, check the allowed SQL grammar and qualify references against authorized tables and columns before execution.'],
  ['Read-only PostgreSQL','Execute with the dedicated analytics role under a read-only transaction, statement deadlines, bounded row fetching and a response byte limit.'],
  ['Charts, KPIs and insights','Render the database rows as a table, a compatible chart or a single-value KPI. The ledger keeps the executed SQL and retrieval evidence available for inspection.']
]
const list=document.querySelector('#stages')
const article=document.querySelector('.pipeline article')
let current=0
function select(index){
  current=index
  for(const [i,button] of [...list.querySelectorAll('button')].entries()){
    if(i===index)button.setAttribute('aria-current','step')
    else button.removeAttribute('aria-current')
  }
  document.querySelector('#position').textContent='Stage '+(index+1)+' of '+stages.length
  document.querySelector('#stage').textContent=stages[index][0]
  document.querySelector('#detail').textContent=stages[index][1]
  document.querySelector('#next').textContent=index===stages.length-1?'Back to question ↺':'Next stage →'
  article.classList.remove('enter')
  requestAnimationFrame(()=>requestAnimationFrame(()=>article.classList.add('enter')))
}
stages.forEach(([name],i)=>{
  const item=document.createElement('li'),button=document.createElement('button')
  button.textContent=name
  button.addEventListener('click',()=>select(i))
  item.append(button)
  list.append(item)
})
document.querySelector('#next').addEventListener('click',()=>select((current+1)%stages.length))
select(0)
const dialog=document.querySelector('dialog')
for(const button of document.querySelectorAll('[data-image]')){
  button.addEventListener('click',()=>{
    const large=document.querySelector('#large')
    large.src='assets/'+button.dataset.image
    large.alt=button.querySelector('img').alt
    document.querySelector('#caption').textContent=button.parentElement.querySelector('strong').textContent
    dialog.showModal()
  })
}
document.querySelector('#close').addEventListener('click',()=>dialog.close())
dialog.addEventListener('click',e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close()}})


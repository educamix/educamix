const monthlyFrequencyDataMock = [
    {
        date: "01/01/2025",
        participated: true
    },
    {
        date: "02/01/2025",
        participated: true
    },
    {
        date: "03/01/2025",
        participated: true
    },
    {
        date: "04/01/2025",
        participated: true
    },
    {
        date: "05/01/2025",
        participated: false
    },
    {
        date: "06/01/2025",
        participated: true
    },
    {
        date: "07/01/2025",
        participated: true
    },
    {
        date: "08/01/2025",
        participated: true
    },
    {
        date: "09/01/2025",
        participated: true
    },
    {
        date: "10/01/2025",
        participated: true
    },
    {
        date: "11/01/2025",
        participated: false
    },
    {
        date: "12/01/2025",
        participated: true
    },
    {
        date: "13/01/2025",
        participated: true
    },
    {
        date: "14/01/2025",
        participated: true
    },
    {
        date: "15/01/2025",
        participated: true
    },
    {
        date: "16/01/2025",
        participated: true
    },
    {
        date: "17/01/2025",
        participated: true
    },
    {
        date: "18/01/2025",
        participated: true
    },
    {
        date: "19/01/2025",
        participated: true
    },
    {
        date: "20/01/2025",
        participated: true
    },
    {
        date: "21/01/2025",
        participated: true
    },
    {
        date: "22/01/2025",
        participated: true
    },
    {
        date: "23/01/2025",
        participated: false
    },
    {
        date: "24/01/2025",
        participated: false
    },
    {
        date: "25/01/2025",
        participated: true
    },
    {
        date: "26/01/2025",
        participated: true
    },
    {
        date: "27/01/2025",
        participated: true
    },
    {
        date: "28/01/2025",
        participated: true
    },
    {
        date: "29/01/2025",
        participated: true
    },
    {
        date: "30/01/2025",
        participated: true
    },
    {
        date: "31/01/2025",
        participated: false
    },
]
const SummaryData = [
    {
        title: "Troféus",
        description: "24",
        icon: "emoji_events"
    },
    {
        title: "Melhor disciplina",
        description: "Português",
        icon: "book_4"
    },
    {
        title: "Joga desde",
        description: "2025",
        icon: "calendar_today"
    },
    {
        title: "Disciplina favorita",
        description: "Matemática",
        icon: "star"
    },
    {
        title: "Atividades concluídas",
        description: "47",
        icon: "exercise"
    },
    {
        title: "Record nos rankings",
        description: "7",
        icon: "editor_choice"
    },
]

const disciplinesDataMock = [
    {
        name: "Português",
        value: 8
    },
    {
        name: "Matemática",
        value: 5
    },
    {
        name: "Geografia",
        value: 5
    },
    {
        name: "História",
        value: 4
    },
    {
        name: "Ciências",
        value: 3
    },
]

const DisciplineItem = ({name, value}: {name: string, value: number})=>(
    <div>
        <div className="flex justify-between bg-[#3B4758] rounded-md py-3 px-4">
            <p>{name}</p>
            <p className="text-[#FE3E8A]">{value}</p>
        </div>
    </div>
)

type SummaryCardProps = {
    title: string
    description: string
    icon: string
}
const SummaryCard = ({title, description, icon}: SummaryCardProps)=>(
    <div className="flex flex-col gap-2 rounded-md bg-[#43556A] p-2">
        <div>
            <p>{title}</p>
        </div>
        <div className="flex gap-2 justify-between text-[#FE3E8A] font-inter font-bold text-2xl">
        <span className="material-symbols-outlined">
            {icon}
        </span>
            <p>{description}</p>
        </div>
    </div>
)

export const Summary = ()=>{
    return (
        <div className="flex flex-col w-full text-white">
            <div className="flex m-2 p-1 border-b border-[#43556A] min-h-full row-auto" >
                <div className="text-white">
                    <p>Resumo do aluno</p>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-1 m-1 mt-10">
               {SummaryData.map( user => <SummaryCard key={user.title} {...user} />)}
            </div>
            <div className="flex m-2 my-7 p-1 border-b border-[#43556A] min-h-full row-auto" />
            <div className="flex justify-between m-1 p-1">
                <p>Frequência mensal</p>
                <span className="material-symbols-outlined">
                calendar_today
                </span>
            </div>
            <div>
                <div className="grid grid-cols-10 gap-2 p-2 m-2">
                {monthlyFrequencyDataMock.map( day => (
                    <div key={day.date} className={` ${day.participated ? 'bg-[#853987]' : 'bg-[#324050FF]'} rounded-md w-7 h-7`} />
                ))}
                </div>
            </div>
            <div className="flex m-2 my-7 p-1 border-b border-[#43556A] min-h-full row-auto" />
            <div className="flex flex-col gap-2 m-2 mb-10">
                {disciplinesDataMock.map( discipline => <DisciplineItem key={discipline.name} {...discipline} />)}
            </div>
        </div>
    )
}
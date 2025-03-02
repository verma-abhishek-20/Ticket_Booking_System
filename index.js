    let seatCont=document.querySelector(".seatsContainer");
    let price=document.querySelector(".price");
    let cost=document.querySelector(".cost");

    let TotalSeat=30;
    let TicketPrice=300;

    for(let i=1; i<=TotalSeat; i++){
        let seats=document.createElement("button");
        seats.classList.add("PersonSeat");
        seats.textContent=i;
        seats.addEventListener("click",Toggle);
        seatCont.appendChild(seats);
    }

    let selectSeat=[];

    function Toggle(event){
            const seat=event.target;
            console.log(seat.textContent);
            
            if(seat.classList.contains("Booked")) return;

            else if(seat.classList.contains("selected")){
                seat.classList.remove("selected");
                selectSeat=selectSeat.filter(fil=> fil !== seat.textContent);
            }
            else{
                seat.classList.add("selected");
                selectSeat.push(seat.textContent);
                seat.style.backgroundColor="green";
            }
            updateInfo();
    }

    function updateInfo(){
        price.innerText=selectSeat.length;
        cost.innerText=selectSeat.length*TicketPrice;
    }

    document.querySelector(".confirmBtn").addEventListener("click",()=>{
        if(selectSeat.length==0){
            alert("Please Select Seat!!")
        }
        else{
            alert("Ticket Booked!!")
        };

        let personSeat=document.querySelectorAll(".PersonSeat");

        personSeat.forEach(ps=>{
        if(ps.classList.contains("selected")){
            ps.classList.remove="selected";
            ps.classList.add("Booked");
            ps.style.backgroundColor="red";
        }
        })   
        selectSeat=[];
        updateInfo();

    })
<template>
    <div class="main">
        <div class="house" >
            <div class="floor" v-for="floor in elevatorData" :key="floor.floor">
                <div class="floor-windows">
                    <table class="window">
                        <tr>
                            <td rowspan="2"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </table>
                    <table class="window">
                        <tr>
                            <td rowspan="2"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div class="elevator-place">
                    <div class="people-place">

                    </div>
                    <div class="elevator-block">
                        <div class="passenger-elevator-place">
                            <div class="passenger-elevator">
                                <div v-if="floor.passengerElevatorDoorsOpen" class="passenger-door-left passenger-left-open" ></div>
                                <div v-else class="passenger-door-left passenger-left-close" ></div>

                                <div v-if='floor.passengerElevatorDoorsOpen' class="passenger-door-right passenger-right-open"></div>
                                <div v-else class="passenger-door-right passenger-right-close"></div>

                            </div>
                        </div>
                        <div class="floor-num">
                            <p>{{floor.floor}}</p>
                        </div>
                        <div class="cargo-elevator-place">
                            <div class="cargo-elevator">
                               <div v-if="floor.cargoElevatorDoorsOpen" class="cargo-door-left cargo-left-open" ></div>
                                <div v-else class="cargo-door-left cargo-left-close" ></div>

                                <div v-if='floor.cargoElevatorDoorsOpen' class="cargo-door-right cargo-right-open"></div>
                                <div v-else class="cargo-door-right cargo-right-close"></div>
                            </div>

                        </div>
                    </div>
                    <div class="people-place">

                    </div>
                </div>
                <div class="floor-windows">
                    <table class="window">
                        <tr>
                            <td rowspan="2"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </table>
                    <table class="window">
                        <tr>
                            <td rowspan="2"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="passenger-elevator-shaft">
                <div class="passenger-elevator-block" id="passenger-elevator">

                </div>
            </div>
            <div class="cargo-elevator-shaft">
                <div class="cargo-elevator-block" id="cargo-elevator">

                </div>
            </div>
        </div>
        <div class="panel">

            <div class="panels-into-elevators">   
                <div class="passenger-elevator-panel">
                    <h3>Пассажирский лифт</h3>
                    <div class="elevator-data">
                        <div class="elevator-floor">
                            <p>{{passengerElevatorFloor}}</p>
                            
                        </div>
                        <div class="direction">
                            <div class="direction-top" v-if="!passengerElevatorData.directionDown && passengerElevatorData.directionDown !== null">
                                <span class="dir-left"></span>
                                <span class="dir-right"></span>
                            </div>
                            <div class="direction-center" v-if="passengerElevatorData.directionDown !== null">
                                <div></div>
                                <div></div>
                            </div>
                            <div class="direction-down" v-if="passengerElevatorData.directionDown && passengerElevatorData.directionDown !== null">
                                <span class="dir-right"></span>
                                <span class="dir-left"></span>
                                
                            </div>
                        </div>
                    </div>
                   
                    <div class="elevator-panel">
                        <div class="not-active" v-if="!passengerElevatorData.move"></div>
                        <div v-for="floor in passengerElevatorPanel" :key="floor.floor">
                            <button :class="floor.active ? 'active-button' : ''" @click="passengerElevatorUpdatePath(floor.floor)">{{floor.floor}}</button>
                        </div>
                    </div>
                </div>
                <div class="cargo-elevator-panel">
                    <h3>Грузовой лифт</h3>
                    <div class="elevator-data">
                        <div class="elevator-floor">
                            <p>{{cargoElevatorFloor}}</p>
                            
                        </div>
                        <div class="direction">
                            <div class="direction-top" v-if="!cargoElevatorData.directionDown && cargoElevatorData.directionDown !== null">
                                <span class="dir-left"></span>
                                <span class="dir-right"></span>
                            </div>
                            <div class="direction-center" v-if="cargoElevatorData.directionDown !== null">
                                <div></div>
                                <div></div>
                            </div>
                            <div class="direction-down" v-if="cargoElevatorData.directionDown && cargoElevatorData.directionDown !== null">
                                <span class="dir-right"></span>
                                <span class="dir-left"></span>
                                
                            </div>
                        </div>
                    </div>
                    <div class="elevator-panel">
                        <div class="not-active" v-if="!cargoElevatorData.move"></div>
                        <div v-for="floor in cargoElevatorPanel" :key="floor.floor">
                            <button :class="floor.active ? 'active-button' : ''" @click="cargoElevatorUpdatePath(floor.floor)">{{floor.floor}}</button>
                        </div>
                    </div>
                </div>
                <div class="out-elevator-panel">
                    <h3>Кнопки на этажах</h3>
                    <div class="elevator-panel">
                        <div v-for="floor in elevatorOutPanel" :key="floor.floor">
                            <button :class="floor.active ? 'active-button' : ''" @click="callElevator(floor.floor, null)">{{floor.floor}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    Общая очередь {{callsQueue}} | {{callsQueueLength}}<br>
    Пассажирская очередь {{passengerCallsQueue}}<br>
    Грузовая очередь {{cargoCallsQueue}}<br>
    Этажи нажатые в пассажирском лифте {{passengerCallsQueue}}<br>
    Этажи нажатые в грузовом лифте {{cargoCallsQueue}}<br>
    Данные Пассажирского лифта {{passengerElevatorData}}<br>
    Данные Грузового лифта {{cargoElevatorData}}<br>
</template>


<script>
export default {
    data(){
        return{
            maxFloor: 17,
            elevatorMargin: 55,

            elevatorData: [],
            cargoElevatorData: {busy: false, move: false, waiting: false, doorsOpen: false, floor: 1, endPointFloor: null, route: [], directionDown: null, callInto: null},
            passengerElevatorData: {busy: false, move: false, waiting: false, doorsOpen: false, floor: 1, endPointFloor: null, route: [], directionDown: null, callInto: null},
            
            elevatorOutPanel: [],
            passengerElevatorPanel: [],
            cargoElevatorPanel: [],

            cargoElevatorFloor: 1,
            passengerElevatorFloor: 1,

            callsQueue: [],
            callsQueueLength: 0,
            passengerCallsQueue: [],
            cargoCallsQueue: [],

        }
    },
    mounted(){
        this.setElevatorData();
        
    },
    watch:{
        'callsQueue.length'(){
            if(this.callsQueueLength === this.callsQueue.length){
                console.log('change');
                
                let elevator = this.checkElevatorDirection(this.callsQueue[this.callsQueueLength - 1]);
                console.log(elevator);
                if(elevator !== null){
                    if(elevator){
                        this.cargoElevatorUpdatePath(this.callsQueue[this.callsQueueLength - 1]);
                    }
                    else{
                        this.passengerElevatorUpdatePath(this.callsQueue[this.callsQueueLength - 1]);
                        
                    }
                    this.callsQueue.splice(-1, 1);
                    this.callsQueueLength = this.callsQueue.length;
                }
            }
        },
        'passengerElevatorData.move'(){
            if(!this.passengerElevatorData.move){
                // console.log(this.passengerElevatorData.route.length);
                
                // else{
                    if(this.passengerElevatorFloor === this.passengerElevatorData.route[0]){
                        this.passengerCallsQueue = this.passengerCallsQueue.filter((obj) => {
                            return obj != this.passengerElevatorData.route[0];
                        })
                        this.passengerElevatorData.route.splice(0, 1);    

                    }
                    if(this.passengerElevatorData.route.length !== 0){
                        this.passengerElevatorMove(this.passengerElevatorData.route[0], true);
                    }
                // }
                if(this.passengerElevatorData.route.length === 0){
                    this.passengerElevatorData.busy = false;
                }
            }
        },
        'cargoElevatorData.move'(){
            if(!this.cargoElevatorData.move){
                
                // else{
                    if(this.cargoElevatorFloor === this.cargoElevatorData.route[0]){
                        this.cargoCallsQueue = this.cargoCallsQueue.filter((obj) => {
                            return obj != this.cargoElevatorData.route[0];
                        })
                        this.cargoElevatorData.route.splice(0, 1);    

                    }
                    if(this.cargoElevatorData.route.length !== 0){
                        this.cargoElevatorMove(this.cargoElevatorData.route[0], true);
                    }
                // }
                if(this.cargoElevatorData.route.length === 0){
                    this.cargoElevatorData.busy = false;
                }
            }
        },
        'passengerElevatorData.busy'(){
            if(!this.passengerElevatorData.busy){
                    let minDiff = 0;
                    let nextFloor = 0;
                    for (let i = 0; i < this.callsQueue.length; i++) {
                        let diff = Math.abs(this.callsQueue[i] - this.passengerElevatorData.floor);
                        if(minDiff === 0){
                            minDiff = diff;
                            nextFloor = this.callsQueue[i];
                        }
                        else{
                            if(minDiff > diff){
                                minDiff = diff;
                                nextFloor = this.callsQueue[i];
                            }
                        }
                    }
                    if(nextFloor > 0){
                        if(nextFloor > this.passengerElevatorData.floor){
                            this.callElevator(nextFloor);
                        }
                        else{
                            this.callElevator(nextFloor);
                        }
                        this.callsQueue = this.callsQueue.filter((obj) => {
                            return obj != nextFloor;
                        })
                    }
            }
        },
        'cargoElevatorData.busy'(){
            if(!this.cargoElevatorData.busy){
                
                let minDiff = 0;
                let nextFloor = 0;
                for (let i = 0; i < this.callsQueue.length; i++) {
                    let diff = Math.abs(this.callsQueue[i] - this.cargoElevatorData.floor);
                    if(minDiff === 0){
                        minDiff = diff;
                        nextFloor = this.callsQueue[i];
                    }
                    else{
                        if(minDiff > diff){
                            minDiff = diff;
                            nextFloor = this.callsQueue[i];
                        }
                    }
                }
                if(nextFloor > 0){
                    if(nextFloor > this.cargoElevatorData.floor){
                        this.callElevator(nextFloor);
                    }
                    else{
                        this.callElevator(nextFloor);
                    }
                    this.callsQueue = this.callsQueue.filter((obj) => {
                        return obj != nextFloor;
                    })
                }
            }
            
        },
        'passengerElevatorData.waiting'(){
            if(this.passengerElevatorData.waiting){
                this.doorsOpen(this.passengerElevatorData.floor, false);
            }
            else{
                this.doorsClose(this.passengerElevatorData.floor, false);
            }
        },
        'cargoElevatorData.waiting'(){
            if(this.cargoElevatorData.waiting){
                this.doorsOpen(this.cargoElevatorData.floor, true);
            }
            else{
                this.doorsClose(this.cargoElevatorData.floor, true);
            }
        },
    },
    methods:{
        setFloorHeight(){
            let floors = document.querySelectorAll('.floor');
            let house = document.querySelector('.house');
            let floorHeight = house.clientHeight / this.maxFloor;
            floors.forEach(floor => {
                floor.style.height = floorHeight + 'px';
            });
        },
        setElevatorData(){
            for (let i = 0; i < this.maxFloor; i++) {
                this.elevatorData.push({
                    floor: i+1,
                    cargoElevator: false,
                    passengerElevator: false,
                    cargoElevatorDoorsOpen: false,
                    passengerElevatorDoorsOpen: false,
                })
                this.elevatorOutPanel.push({
                    floor: i+1,
                    active: false,
                });
                this.cargoElevatorPanel.push({
                    floor: i+1,
                    active: false,
                });
                this.passengerElevatorPanel.push({
                    floor: i+1,
                    active: false,
                });
            }
            this.elevatorData[0].cargoElevator = true;
            this.elevatorData[0].passengerElevator = true;
            this.elevatorData.reverse();
            this.elevatorOutPanel.reverse();
            this.cargoElevatorPanel.reverse();
            this.passengerElevatorPanel.reverse();
            setTimeout(()=>{
                this.setFloorHeight();
            }, 100)
        },
        updateElevatorData(elevatorCargo, floor, oldFloor){
            for (let i = 0; i < this.elevatorData.length; i++) {
                if(this.elevatorData[i].floor === floor){
                    if(elevatorCargo){
                        this.elevatorData[i].cargoElevator = true;
                    }
                    else{
                        this.elevatorData[i].passengerElevator = true;
                    }
                }
                else{
                    if(elevatorCargo){
                        this.elevatorData[i].cargoElevator = false;
                    }
                    else{
                        this.elevatorData[i].passengerElevator = false;
                    }
                }
            }
            
        },  
        doorsOpen(floor, elevatorCargo){
            for (let i = 0; i < this.elevatorData.length; i++) {
                if(this.elevatorData[i].floor === floor){
                    if(elevatorCargo){
                        this.elevatorData[i].cargoElevatorDoorsOpen = true;
                        this.cargoElevatorData.doorsOpen = true;
                        this.cargoElevatorData.directionDown = null;

                    }
                    else{
                        this.elevatorData[i].passengerElevatorDoorsOpen = true;
                        this.passengerElevatorData.doorsOpen = true;
                        this.passengerElevatorData.directionDown = null;

                    }
                }  
            } 
        },
        doorsClose(floor, elevatorCargo){
            
            for (let i = 0; i < this.elevatorData.length; i++) {
                if(this.elevatorData[i].floor === floor){
                    if(elevatorCargo){
                        this.elevatorData[i].cargoElevatorDoorsOpen = false;
                        setTimeout(()=>{
                            this.cargoElevatorData.doorsOpen = false;
                            this.cargoElevatorData.move = false;
                        }, 2000)
                        if(this.cargoElevatorData.callInto){
                            this.removeActiveInCargoPanel(floor);
                        }
                        else{
                            this.removeActiveInOutPanel(floor);
                        }
                    }
                    else{
                        this.elevatorData[i].passengerElevatorDoorsOpen = false;
                        setTimeout(()=>{
                            this.passengerElevatorData.doorsOpen = false;
                            this.passengerElevatorData.move = false;

                        }, 2000)

                        if(this.passengerElevatorData.callInto){
                            this.removeActiveInPassengerPanel(floor);
                        }
                        else{
                            this.removeActiveInOutPanel(floor);
                        }
                    }
                }
            } 
            

        },
        passengerElevatorMove(floor, into){
            this.passengerElevatorData.move = true;
            this.passengerElevatorData.endPointFloor = floor;
            this.passengerElevatorData.callInto = into;
            let oldFloor = this.passengerElevatorFloor;
            let diff = this.getFloorDiff(floor, oldFloor, false);  
            let i = 0; 
            const interval = setInterval(()=>{
                    if(i%55 === 0){
                        if(i !== diff){
                            this.passengerElevatorFloor = oldFloor > floor ? this.passengerElevatorFloor - 1 : this.passengerElevatorFloor + 1;
                        }
                    }
                    if(i < diff){
                        let elevatorMargin = document.getElementById('passenger-elevator').offsetTop;
                        if(oldFloor > floor){
                            document.getElementById('passenger-elevator').style.marginTop = elevatorMargin + 1 + 'px'; 
                        }
                        else if(oldFloor < floor){
                            document.getElementById('passenger-elevator').style.marginTop = elevatorMargin - 1 + 'px'; 
                        }
                    }
                    else{
                        this.updateElevatorData(false, floor, oldFloor);
                        this.passengerElevatorData.floor = floor;
                        this.passengerElevatorData.waiting = true;
                        setTimeout(() => {
                            this.passengerElevatorData.waiting = false;
                        }, 10000)
                        clearInterval(interval);

                    }
                    i += 1;
            }, 20);
           
        },
        cargoElevatorMove(floor, into){
            this.cargoElevatorData.move = true;
            this.cargoElevatorData.endPointFloor = floor;
            this.cargoElevatorData.callInto = into;
            let oldFloor = this.cargoElevatorFloor;
            let diff = this.getFloorDiff(floor, oldFloor, true);  
            let i = 0; 
            const interval = setInterval(()=>{
                    if(i%55 === 0){
                        if(i !== diff){
                            this.cargoElevatorFloor = oldFloor > floor ? this.cargoElevatorFloor - 1 : this.cargoElevatorFloor + 1;
                        }
                    }
                    if(i < diff){
                        let elevatorMargin = document.getElementById('cargo-elevator').offsetTop;
                        if(oldFloor > floor){
                            document.getElementById('cargo-elevator').style.marginTop = elevatorMargin + 1 + 'px'; 
                        }
                        else if(oldFloor < floor){
                            document.getElementById('cargo-elevator').style.marginTop = elevatorMargin - 1 + 'px'; 
                        }
                    }
                    else{
                        this.updateElevatorData(true, floor, oldFloor);
                        this.cargoElevatorData.floor = floor;
                        this.cargoElevatorData.waiting = true;
                        setTimeout(() => {
                            this.cargoElevatorData.waiting = false;
                        }, 10000)
                        clearInterval(interval);
                    }
                    i += 1;
            }, 20)
            
            
        },
        addActiveInOutPanel(floor){
            for (let i = 0; i < this.elevatorOutPanel.length; i++) {
                if(this.elevatorOutPanel[i].floor === floor){
                    this.elevatorOutPanel[i].active = true;
                }
            }
        },
        removeActiveInOutPanel(floor){
            for (let i = 0; i < this.elevatorOutPanel.length; i++) {
                if(this.elevatorOutPanel[i].floor === floor){
                    this.elevatorOutPanel[i].active = false;
                }
            }
        },
        addActiveInPassengerPanel(floor){
            this.passengerElevatorData.busy = true;
            for (let i = 0; i < this.passengerElevatorPanel.length; i++) {
                if(this.passengerElevatorPanel[i].floor === floor){
                    this.passengerElevatorPanel[i].active = true;
                }
            }
        },
        removeActiveInPassengerPanel(floor){
            for (let i = 0; i < this.passengerElevatorPanel.length; i++) {
                if(this.passengerElevatorPanel[i].floor === floor){
                    this.passengerElevatorPanel[i].active = false;
                }
            }
        },
        addActiveInCargoPanel(floor){
            this.cargoElevatorData.busy = true;
            for (let i = 0; i < this.cargoElevatorPanel.length; i++) {
                if(this.cargoElevatorPanel[i].floor === floor){
                    this.cargoElevatorPanel[i].active = true;
                }
            }
        },
        removeActiveInCargoPanel(floor){
            for (let i = 0; i < this.cargoElevatorPanel.length; i++) {
                if(this.cargoElevatorPanel[i].floor === floor){
                    this.cargoElevatorPanel[i].active = false;
                }
            }
        },
        passengerElevatorUpdatePath(floor){
            this.addActiveInPassengerPanel(floor);
            let existFloor = this.passengerCallsQueue.includes(floor);

            if(!existFloor){
                this.passengerCallsQueue.push(floor);
            }
            let route = []
            let higher = [];
            let below = []; 
            for (let i = 0; i < this.passengerCallsQueue.length; i++) {
                if(this.passengerCallsQueue[i] > this.passengerElevatorFloor){
                    higher.push(this.passengerCallsQueue[i]);
                }
                else if(this.passengerCallsQueue[i] === this.passengerElevatorFloor){
                    this.passengerCallsQueue.splice(i, 1);
                }
                else{
                    below.push(this.passengerCallsQueue[i]);
                }
            }
            below.sort(this.compareNumeric);
            below.reverse();
            higher.sort(this.compareNumeric);
            if(below.length >= higher.length){
                for (let i = 0; i < below.length; i++) {
                    route.push(below[i]);
                }
                for (let i = 0; i < higher.length; i++) {
                    route.push(higher[i]);
                }
            }
            else{
                for (let i = 0; i < higher.length; i++) {
                    route.push(higher[i]);
                }
                for (let i = 0; i < below.length; i++) {
                    route.push(below[i]);
                }
            }
            this.passengerElevatorData.route = route;
            console.log(below, higher, this.passengerElevatorData.route, 'pass');

        },
        cargoElevatorUpdatePath(floor){
            this.addActiveInCargoPanel(floor);
            let existFloor = this.cargoCallsQueue.includes(floor);
            if(!existFloor){
                this.cargoCallsQueue.push(floor);
            }
            let route = []
            let higher = [];
            let below = []; 
            for (let i = 0; i < this.cargoCallsQueue.length; i++) {
                if(this.cargoCallsQueue[i] > this.cargoElevatorFloor){
                    higher.push(this.cargoCallsQueue[i]);
                }
                else if(this.cargoCallsQueue[i] === this.cargoElevatorFloor){
                    this.cargoCallsQueue.splice(i, 1);
                }
                else{
                    below.push(this.cargoCallsQueue[i]);
                }
            }
            below.sort(this.compareNumeric);
            below.reverse();
            higher.sort(this.compareNumeric);
            console.log(below, higher, 'cargo');
            if(below.length >= higher.length){
                for (let i = 0; i < below.length; i++) {
                    route.push(below[i]);
                }
                for (let i = 0; i < higher.length; i++) {
                    route.push(higher[i]);
                }
            }
            else{
                for (let i = 0; i < higher.length; i++) {
                    route.push(higher[i]);
                }
                for (let i = 0; i < below.length; i++) {
                    route.push(below[i]);
                }
            }
            this.cargoElevatorData.route = route;
        },
        callElevator(floor){
            this.addActiveInOutPanel(floor);
            let cargo = this.checkElevatorsMove(floor);
            if(cargo !== null){
                if(cargo){
                    this.callsQueue = this.callsQueue.filter((obj) => {
                        return obj !== floor;
                    })
                    this.cargoElevatorData.busy = true;
                    // this.cargoElevatorData.route.push(floor);
                    this.cargoElevatorMove(floor, false);
                }
                else{
                    this.callsQueue = this.callsQueue.filter((obj) => {
                        return obj !== floor;
                    })
                    this.passengerElevatorData.busy = true;
                    // this.passengerElevatorData.route.push(floor);
                    this.passengerElevatorMove(floor, false);
                }
            }
            
            return true;
        },
        
        checkElevatorsMove(floor){
            // console.log('pass: '+ this.passengerElevatorData.move, 'cargo: '+this.cargoElevatorData.move)
            if(this.cargoElevatorData.busy && this.passengerElevatorData.busy){
                // let elevator = this.checkElevatorDirection(floor);
                // console.log(elevator);
                // if(elevator === null){
                //     this.addCallToQueue(floor);
                // }
                // else{
                //     if(elevator){
                //         this.cargoElevatorUpdatePath(floor);
                //     }
                //     else{
                //         this.passengerElevatorUpdatePath(floor);
                //     }
                // }
                this.addCallToQueue(floor);
                return null;
                
            }
            else if(this.passengerElevatorData.busy && !this.cargoElevatorData.busy){
                return true;
            }
            else if(this.cargoElevatorData.busy && !this.passengerElevatorData.busy){
                return false;
            }
            else if(!this.cargoElevatorData.busy &&  !this.passengerElevatorData.busy){
                return this.checkTheNearestElevator(floor);
            }
        },
        addCallToQueue(floor){
            let existFloor = this.callsQueue.includes(floor);

            if(!existFloor){
                this.callsQueue.push(floor);
                this.callsQueueLength = this.callsQueue.length;
            }
        },
        checkTheNearestElevator(floor){
            let diffPassenger = this.passengerElevatorFloor > floor ? this.passengerElevatorFloor - floor : floor - this.passengerElevatorFloor;
            let diffCargo = this.cargoElevatorFloor > floor ? this.cargoElevatorFloor - floor : floor - this.cargoElevatorFloor;
            if(diffCargo > diffPassenger || diffCargo === diffPassenger){
                return false;
            }
            else if(diffCargo < diffPassenger){
                return true;
            }
        },
        checkElevatorDirection(floor){
            let down = null;
            let elevator = null;
            if(floor > 1){
                down = true
            }
            else{
                down = false;
            }
            if(down){
                if(this.cargoElevatorData.directionDown && this.passengerElevatorData.directionDown){
                    elevator = this.checkTheNearestElevator(floor);
                }
                else if(this.cargoElevatorData.directionDown){
                    elevator = true;
                }
                else if(this.passengerElevatorData.directionDown){
                    elevator = false;
                }   
            }
            else{
                if(!this.cargoElevatorData.directionDown && !this.passengerElevatorData.directionDown){
                    elevator = this.checkTheNearestElevator(floor);
                }
                else if(!this.cargoElevatorData.directionDown){
                    elevator = true;
                }
                else if(!this.passengerElevatorData.directionDown){
                    elevator = false;
                } 
            }
            return elevator
            
        },
        getFloorDiff(newFloor, oldFloor, cargo){
            let diff = 0;
            if(oldFloor > newFloor){
                diff =  (oldFloor - newFloor) * this.elevatorMargin;   
                if(cargo){
                    this.cargoElevatorData.directionDown = true;
                }
                else{
                    this.passengerElevatorData.directionDown = true;
                }
                
            }
            else if(oldFloor < newFloor){
                diff =  (newFloor - oldFloor) * this.elevatorMargin;  
                if(cargo){
                    this.cargoElevatorData.directionDown = false;
                }
                else{
                    this.passengerElevatorData.directionDown = false;
                }
            }
            return diff;
        },
        compareNumeric(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        }
    }
}
</script>


<style>
    *{
        margin: 0;
        padding: 0;
    }
    .main{
        display: flex;
        justify-content: space-between;
        margin: 20px;
    }
    .house{
        border: 1px solid #000;
        width: 55%;
        min-height: 900px;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .passenger-elevator-shaft{
        position: absolute;
        height: 100%;
        border-right: 2px solid #000;
        border-left: 2px solid #000;
        width: 44px;
        left: 42.95%;
        opacity: 0.5;
        z-index: 1;
    }
    .cargo-elevator-shaft{
        position: absolute;
        height: 100%;
        border-right: 2px solid #000;
        border-left: 2px solid #000;
        width: 58px;
        left: 51%;
        opacity: 0.5;
        z-index: 1;
    }
    .cargo-elevator-block{
        margin-top: 885px;
        height: 46px;
        width: 56px;
        border: 1px solid rgb(118 118 118);
        background: rgb(118 118 118);
        z-index: 2;
    }
    .passenger-elevator-block{
        margin-top: 885px;
        height: 46px;
        width: 43px;
        border: 1px solid rgb(118 118 118);
        background: rgb(118 118 118);
        z-index: 2;
        
    }
    .panel{ 
        border: 1px solid #000;
        width: 40%;
        height: 900px;
        display: flex;
        flex-direction: column;
    }
    .window{
        width: 50px;
        height: 40px;
        border: 1px solid #000;
    }
    .window td{
        border: 1px solid #000;
    }
    .floor{
        width: 100%;
        border: 1px solid #000;
        display: flex;
        justify-content: space-between;
    }
    .floor-windows{
        width: 30%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .elevator-place{
        width: 40%;
        display: flex;
        justify-content: space-between;
        border-right: 1px solid #000;
        border-left: 1px solid #000;
    }
    .people-place{
        width: 30%;
    }
    .floor-num{
        font-size: 20px;
        text-align: center;
        margin-bottom: 10px;
        width: 20%;
    }
    .elevator-block{
        width: 35%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    .passenger-elevator-place{
        width: 30%;
        height: 45px;
        border: 2px solid #000;
        border-bottom: 0;
        position: relative;
        /* z-index: 2;
        background: #fff; */
    }
    .cargo-elevator-place{
        width: 40%;
        height: 45px;
        border: 2px solid #000;
        border-bottom: 0;
        position: relative;
        /* z-index: 2;
        background: #fff; */
    }
    .close-elevator{
        display: flex;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .passenger-elevator{
        display: grid;
        grid-template-columns: 1fr 1fr ;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .cargo-elevator{
        display: grid;
        grid-template-columns: 2fr 5fr ;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .passenger-door-left{
        width: 100%;
        border-right: 1px solid #000;
        z-index: 9;
        opacity: 0.6;
        background: #fff;
    }
    .passenger-door-right{
        border-left: 1px solid #000;
        width: 100%;
        margin-left: 0;
        z-index: 9;
        opacity: 0.6;
        background: #fff;
    }
    .cargo-door-left{
        width: 100%;
        border-right: 1px solid #000;
        z-index: 9;
        opacity: 0.6;
        background: #fff;
    }
    .cargo-door-right{
        border-left: 1px solid #000;
        width: 100%;
        margin-left: 0;
        z-index: 9;
        opacity: 0.6;
        background: #fff;
    }
    .cargo-door-left.cargo-left-open{
        animation-name: cargo-open-l;
        animation-duration: 2s;
        animation-fill-mode:forwards
    }
    .cargo-door-right.cargo-right-open{
        animation-name: cargo-open-r;
        animation-duration: 2s;
        animation-fill-mode:forwards;
    }
    .cargo-door-left.cargo-left-close{
        animation-name: cargo-close-l;
        animation-duration: 2s;
        animation-fill-mode:forwards;
    }
    .cargo-door-right.cargo-right-close{
        animation-name: cargo-close-r;
        animation-duration: 2s;
        animation-fill-mode:forwards;
    }
    .passenger-door-left.passenger-left-open{
        animation-name: passenger-open-l;
        animation-duration: 2s;
        animation-fill-mode:forwards
    }
    .passenger-door-right.passenger-right-open{
        animation-name: passenger-open-r;
        animation-duration: 2s;
        animation-fill-mode:forwards;
    }
    .passenger-door-left.passenger-left-close{
        animation-name: passenger-close-l;
        animation-duration: 2s;
        animation-fill-mode:forwards;
    }
    .passenger-door-right.passenger-right-close{
        animation-name: passenger-close-r;
        animation-duration: 2s;
        animation-fill-mode:forwards;
    }


    @keyframes cargo-open-l{
        from{
            width: 100%;
        }
        to{
            width: 20%;
        }
    }

    @keyframes cargo-open-r{
        from{
            width: 100%;
            margin-left: 0;
        }
        to{
            width: 20%;
            margin-left: 80%;
        }
    }

    @keyframes cargo-close-l{
        from{
            width: 20%;
        }
        to{
            width: 100%;
        }
    }

    @keyframes cargo-close-r{
        from{
            width: 20%;
            margin-left: 80%;
        }
        to{
            width: 100%;
            margin-left: 0;
        }
    }


    @keyframes passenger-open-l{
        from{
            width: 100%;
        }
        to{
            width: 20%;
        }
    }

    @keyframes passenger-open-r{
        from{
            width: 100%;
            margin-left: 0;
        }
        to{
            width: 20%;
            margin-left: 80%;
        }
    }

    @keyframes passenger-close-l{
        from{
            width: 20%;
        }
        to{
            width: 100%;
        }
    }

    @keyframes passenger-close-r{
        from{
            width: 20%;
            margin-left: 80%;
        }
        to{
            width: 100%;
            margin-left: 0;
        }
    }
    
    .panels-into-elevators{
        /* height: 30%; */
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .panels-into-elevators h3{
        font-size: 20px;
        text-align: center;
        margin: 5px 0;
        font-weight: 400;
    }

    /* .passenger-elevator-panel{
        display: flex;
        flex-direction: column;
        align-items: center;
    } */

    

    .elevator-floor{
        width: 100px;
        height: 100px;
        margin: 15px auto;
        border: 2px solid rgb(94, 94, 94);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(189, 189, 189);
    }

    .elevator-floor p{
        font-size: 70px;
        color: rgb(184, 32, 32);
        text-shadow: rgb(99, 2, 2) 0 0 5px;
    }

    .elevator-panel{
        width: 75%;
        margin: 5px auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 5%;
        border-radius: 10px;
        border: 1px solid #000;
        height: 100%;
        padding: 10px;
        position: relative;
    }
    .elevator-panel div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .elevator-panel button{
        width: 40px;
        height: 40px;
        border-radius: 100%;
        border: 1px solid #000;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 18px;
    }

    .active-button {
        background: rgb(170, 170, 170);
        box-shadow: 0px 0px 5px 5px rgba(214, 214, 214, 0.445);
        color: rgb(184, 32, 32);
        text-shadow: rgb(99, 2, 2) 0 0 5px;
    }

    .elevator-panel button:hover{
        background: rgb(121, 121, 121);
    }

    .elevator-data{
        display: flex;
        justify-content: space-between;
    }
    
    .direction{
        width: 25%;
        display: flex;
        /* grid-template-rows: 1fr 3fr 1fr; */
        flex-direction: column;
        /* justify-content: space-between;
        align-items: center; */
    }

    .direction-top, .direction-down{
        display: flex;
        justify-content: space-between;
        height: 20%;
    }
    .direction-center{
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 5px;
        align-items: center;
        justify-content: center;
        height: 60%;
    }
    .direction-center div{
        background: rgb(184, 32, 32);
        box-shadow: rgb(99, 2, 2) 0 0 5px;
        width: 7px;
        height: 90%;
        border-radius: 25px;
        border: 0;

    }
    .direction-top span, .direction-down span{
        background: rgb(184, 32, 32);
        box-shadow: rgb(99, 2, 2) 0 0 5px;
        height: 5px;
        width: 50%;
        border-radius: 25px;
        border: 0;
    }

    .dir-left{
        transform: rotate(-45deg);
        margin-top: 10px;
    }

    .dir-right{
        transform: rotate(45deg);
        margin-top: 10px;
    }
    .not-active{
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgb(172, 172, 172);
        opacity: 0.5;
        border-radius: 10px;
        cursor: not-allowed;
    }

    


</style>
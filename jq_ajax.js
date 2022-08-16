$(document).ready(function(){
    $states = '{"states":[{"state_id":1,"state_name":"Andaman and Nicobar Islands"},{"state_id":2,"state_name":"Andhra Pradesh"},{"state_id":3,"state_name":"Arunachal Pradesh"},{"state_id":4,"state_name":"Assam"},{"state_id":5,"state_name":"Bihar"},{"state_id":6,"state_name":"Chandigarh"},{"state_id":7,"state_name":"Chhattisgarh"},{"state_id":8,"state_name":"Dadra and Nagar Haveli"},{"state_id":37,"state_name":"Daman and Diu"},{"state_id":9,"state_name":"Delhi"},{"state_id":10,"state_name":"Goa"},{"state_id":11,"state_name":"Gujarat"},{"state_id":12,"state_name":"Haryana"},{"state_id":13,"state_name":"Himachal Pradesh"},{"state_id":14,"state_name":"Jammu and Kashmir"},{"state_id":15,"state_name":"Jharkhand"},{"state_id":16,"state_name":"Karnataka"},{"state_id":17,"state_name":"Kerala"},{"state_id":18,"state_name":"Ladakh"},{"state_id":19,"state_name":"Lakshadweep"},{"state_id":20,"state_name":"Madhya Pradesh"},{"state_id":21,"state_name":"Maharashtra"},{"state_id":22,"state_name":"Manipur"},{"state_id":23,"state_name":"Meghalaya"},{"state_id":24,"state_name":"Mizoram"},{"state_id":25,"state_name":"Nagaland"},{"state_id":26,"state_name":"Odisha"},{"state_id":27,"state_name":"Puducherry"},{"state_id":28,"state_name":"Punjab"},{"state_id":29,"state_name":"Rajasthan"},{"state_id":30,"state_name":"Sikkim"},{"state_id":31,"state_name":"Tamil Nadu"},{"state_id":32,"state_name":"Telangana"},{"state_id":33,"state_name":"Tripura"},{"state_id":34,"state_name":"Uttar Pradesh"},{"state_id":35,"state_name":"Uttarakhand"},{"state_id":36,"state_name":"West Bengal"}]}'

$districts = '{"districts":[{"district_id":622,"district_name":"Agra"},{"district_id":623,"district_name":"Aligarh"},{"district_id":625,"district_name":"Ambedkar Nagar"},{"district_id":626,"district_name":"Amethi"},{"district_id":627,"district_name":"Amroha"},{"district_id":628,"district_name":"Auraiya"},{"district_id":646,"district_name":"Ayodhya"},{"district_id":629,"district_name":"Azamgarh"},{"district_id":630,"district_name":"Badaun"},{"district_id":631,"district_name":"Baghpat"},{"district_id":632,"district_name":"Bahraich"},{"district_id":633,"district_name":"Balarampur"},{"district_id":634,"district_name":"Ballia"},{"district_id":635,"district_name":"Banda"},{"district_id":636,"district_name":"Barabanki"},{"district_id":637,"district_name":"Bareilly"},{"district_id":638,"district_name":"Basti"},{"district_id":687,"district_name":"Bhadohi"},{"district_id":639,"district_name":"Bijnour"},{"district_id":640,"district_name":"Bulandshahr"},{"district_id":641,"district_name":"Chandauli"},{"district_id":642,"district_name":"Chitrakoot"},{"district_id":643,"district_name":"Deoria"},{"district_id":644,"district_name":"Etah"},{"district_id":645,"district_name":"Etawah"},{"district_id":647,"district_name":"Farrukhabad"},{"district_id":648,"district_name":"Fatehpur"},{"district_id":649,"district_name":"Firozabad"},{"district_id":650,"district_name":"Gautam Buddha Nagar"},{"district_id":651,"district_name":"Ghaziabad"},{"district_id":652,"district_name":"Ghazipur"},{"district_id":653,"district_name":"Gonda"},{"district_id":654,"district_name":"Gorakhpur"},{"district_id":655,"district_name":"Hamirpur"},{"district_id":656,"district_name":"Hapur"},{"district_id":657,"district_name":"Hardoi"},{"district_id":658,"district_name":"Hathras"},{"district_id":659,"district_name":"Jalaun"},{"district_id":660,"district_name":"Jaunpur"},{"district_id":661,"district_name":"Jhansi"},{"district_id":662,"district_name":"Kannauj"},{"district_id":663,"district_name":"Kanpur Dehat"},{"district_id":664,"district_name":"Kanpur Nagar"},{"district_id":665,"district_name":"Kasganj"},{"district_id":666,"district_name":"Kaushambi"},{"district_id":667,"district_name":"Kushinagar"},{"district_id":668,"district_name":"Lakhimpur Kheri"},{"district_id":669,"district_name":"Lalitpur"},{"district_id":670,"district_name":"Lucknow"},{"district_id":671,"district_name":"Maharajganj"},{"district_id":672,"district_name":"Mahoba"},{"district_id":673,"district_name":"Mainpuri"},{"district_id":674,"district_name":"Mathura"},{"district_id":675,"district_name":"Mau"},{"district_id":676,"district_name":"Meerut"},{"district_id":677,"district_name":"Mirzapur"},{"district_id":678,"district_name":"Moradabad"},{"district_id":679,"district_name":"Muzaffarnagar"},{"district_id":680,"district_name":"Pilibhit"},{"district_id":682,"district_name":"Pratapgarh"},{"district_id":624,"district_name":"Prayagraj"},{"district_id":681,"district_name":"Raebareli"},{"district_id":683,"district_name":"Rampur"},{"district_id":684,"district_name":"Saharanpur"},{"district_id":685,"district_name":"Sambhal"},{"district_id":686,"district_name":"Sant Kabir Nagar"},{"district_id":688,"district_name":"Shahjahanpur"},{"district_id":689,"district_name":"Shamli"},{"district_id":690,"district_name":"Shravasti"},{"district_id":691,"district_name":"Siddharthnagar"},{"district_id":692,"district_name":"Sitapur"},{"district_id":693,"district_name":"Sonbhadra"},{"district_id":694,"district_name":"Sultanpur"},{"district_id":695,"district_name":"Unnao"},{"district_id":696,"district_name":"Varanasi"}]}'

    function populateStates(){
        $myStatesObj = JSON.parse($states);
        $text ="";
        for(i=0;i<$myStatesObj.states.length;i++){
            $text += "<option>"+$myStatesObj.states[i].state_name+"</option>";
        }
        $("#selectStates").html($text);
    }
    populateStates();

    function populateDistricts(){
        $mydistrictobj = JSON.parse($districts);
        $sel ="";
        for(i=0;i<$mydistrictobj.districts.length;i++){
            $sel += "<option>"+$mydistrictobj.districts[i].district_name+"</option>";
        }
        $("#selectDistricts").html($sel);
    }

    $("#selectStates").change(function(){
        $select = $(this).children(":selected").text();     
        if($select=="Uttar Pradesh"){
            populateDistricts();
        }
        else{
            $("#selectDistricts").html("");
        }
    })
})
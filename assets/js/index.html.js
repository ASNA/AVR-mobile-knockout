var rp = rp || {};

rp.mainModule = function() {
    customerListViewModelInstance = null;
    letterListViewModel = null;

    letterListViewModel = function() {
        var self = this;
        self.letters = []
        for (var i = 65; i < 65 + 26; i++) {
            self.letters.push(String.fromCharCode(i));
        }
    }

    showLetterList = function() {
        $("[id^='container']").hide();
        $('#container-letter-list').show();
    }

    customerListViewModel = function() {
        var self = this;
        self.customers = ko.observableArray([]);
    }

    showCustomerList = function(selectedLetter) {
//        var url = '../assets/js/customers.js';
        var url = "Customers.ashx?firstletter=" + selectedLetter;

        $.getJSON(url, function(data) {
            //var filteredCustomers = _.filter(data.customers,function(o){
            //    return o.name.substring(0, 1) == selectedLetter;
            //});
            //customerListViewModelInstance.customers(filteredCustomers);
            customerListViewModelInstance.customers(data.customers);
            $("[id^='container']").hide();
            $("#container-customer-list").show();
        });
    }

    return {
        'letterListViewModel': letterListViewModel,
        'customerListViewModel': customerListViewModel,
        'showCustomerList': showCustomerList,
        'showLetterList': showLetterList
    }
}();

$(function() {
    customerListViewModelInstance = new customerListViewModel();
    letterListViewModelInstance = new letterListViewModel();

    ko.applyBindings(customerListViewModelInstance, document.getElementById('container-customer-list'));
    ko.applyBindings(letterListViewModelInstance, document.getElementById('container-letter-list'));


    $(document).on('click', "a.alpha-select", function (e) {
        e.preventDefault();
        var selectedLetter = $(this).children().first().attr('data-letter');
        rp.mainModule.showCustomerList(selectedLetter);
    });

    $("button[data-app-action='home']").on('click', function(){
        rp.mainModule.showLetterList();
    });

    $(document).on('click', '#leftmost-button', function(){
        rp.mainModule.showLetterList();
    });

    rp.mainModule.showLetterList();
});
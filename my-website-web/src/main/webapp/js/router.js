/**
 * Provides a Backbone.Router to the application
 *
 * @module VolteneoRouter
 * @uses app
 * @uses UserModel
 * @uses SessionModel
 * @uses DirectDebitCollection
 * @uses MenuLayout
 * @uses DashboardLayout
 * @uses DirectDebitsLayout
 * @uses DirectDebitFormLayout
 * @uses HelpLayout
 * @uses LoginLayout
 */
define([

    'backbone.layoutmanager',
    'app',
    'model/user/UserModel',
    'model/session/SessionModel',
    'collection/directdebit/DirectDebitCollection',
    'view/menu/MenuLayout',
    'view/dashboard/DashboardLayout',
    'view/directdebit/DirectDebitsLayout',
    'view/directdebit/DirectDebitFormLayout',
    'view/help/HelpLayout',
    'view/login/LoginLayout'

], function(

        Layout,
        app,
        UserModel,
        SessionModel,
        DirectDebitCollection,
        MenuLayout,
        DashboardLayout,
        DirectDebitsLayout,
        DirectDebitFormLayout,
        HelpLayout,
        LoginLayout

    ){

    var VolteneoRouter = Backbone.Router.extend({

        initialize: function() {
            // _.bindAll(this, 'show');
            // Backbone.Layout.configure({manage: true});
            // Backbone.history.start();
        },

        /**
         * All possible routes in this application
         *
         * This contains all routes known to this application. Each route handler
         * will decide based on the UserModel information whether or not to enable
         * it
         *
         * @property routes The hash containing known routes and handlers
         * @type Object
         */
        routes: {
            '': 'home',
            'help': 'help',
            'login': 'login',
            'directdebits': 'directdebits',
            'directdebits/:id/edit': 'edit',
            'create': 'create',
            'denied': 'denied'
        },

        /**
         * Route handler
         *
         * @method home
         */
        home: function() {
            var dashboardLayout = new DashboardLayout();
            this.show(dashboardLayout)
        },

        /**
         * Route handler
         *
         * @method login
         */
        login: function() {
            var loginLayout = new LoginLayout();
            loginLayout.render();
        },

        /**
         * Route handler
         *
         * @method directdebits
         */
        directdebits: function() {
            var directDebitsLayout = new DirectDebitsLayout({
                collection: new DirectDebitCollection()
            });
            this.show(directDebitsLayout);
        },

        /**
         * Route handler
         *
         * @method create
         */
        create: function() {
            this.show(new DirectDebitFormLayout());
        },

        /**
         * Route handler
         *
         * @method edit
         * @param {Number} id The `transaction008Pk` of the tx to edit
         */
        edit: function(id) {
            var ddFormLayout = new DirectDebitFormLayout({directDebitId: id});
            this.show(ddFormLayout);
        },

        /**
         * Route handler
         *
         * @method help
         */
        help: function() {
            this.show(new HelpLayout());
        },

        /**
         * Route handler
         *
         * @method denied
         */
        denied: function() {
            // TODO: Jumbotron view or similar
            // this.show(new DeniedLayout());
        },

        /**
         * Helper function to render a view managed by Backbone.Layoutmanager
         * if the user is still logged in. If they are not, or their session
         * has expired, they are redirected to the login page.
         *
         * If the layout has an associated `Backbone.Collection`, the rendering
         * is deferred and left up to the layout itself to handle.
         *
         * @method show
         * @param {Backbone.Layout} layout the layout to be rendered if user is still logged in
         */
        show: function(layout) {
            if(!this.menuLayout) {
                this.menuLayout = new MenuLayout();
                this.menuLayout.render();
            }

            var scope = this;
            app.session.checkAuth({
                success: function(res){
                    if(TRACE) console.log("router: About to render layout");
                    if(layout.collection) {
                        if(TRACE) console.log("This layout has a collection - deferring render");
                    } else {
                        layout.render();
                    }
                }, error: function(res){
                    scope.navigate("login", { trigger: true, replace: true });
                }
            });
        }

    });

    return VolteneoRouter;

});
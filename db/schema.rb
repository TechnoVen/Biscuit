# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170112041705) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendances", force: :cascade do |t|
    t.integer "user_id",  null: false
    t.integer "event_id", null: false
    t.index ["event_id"], name: "index_attendances_on_event_id", using: :btree
    t.index ["user_id"], name: "index_attendances_on_user_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.string  "date",                        null: false
    t.string  "time",                        null: false
    t.integer "max_guests",                  null: false
    t.string  "description"
    t.integer "host_id",                     null: false
    t.integer "city_id",                     null: false
    t.boolean "archived",    default: false
    t.index ["city_id"], name: "index_events_on_city_id", using: :btree
    t.index ["host_id"], name: "index_events_on_host_id", using: :btree
  end

  create_table "hosts", force: :cascade do |t|
    t.text    "desc_1"
    t.text    "desc_2"
    t.text    "desc_3"
    t.integer "user_id", null: false
    t.index ["user_id"], name: "index_hosts_on_user_id", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "nickname"
    t.string   "first_name",      null: false
    t.string   "last_name"
    t.string   "pet_type"
    t.integer  "city_id"
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["city_id"], name: "index_users_on_city_id", using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end

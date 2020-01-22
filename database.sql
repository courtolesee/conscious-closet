database name: conscious_closet

CREATE TABLE consumer (
	"user_id" SERIAL PRIMARY KEY,
	"username" VARCHAR (50) UNIQUE NOT NULL,
	"password" VARCHAR (500) NOT NULL,
	"new_yearly_cap" integer,
	"water_goal" numeric(20, 2),
	"waste_goal" numeric(20, 2),
	"actual_water" numeric(20, 2),
	"actual_waste" numeric(20, 2)
);

CREATE TABLE clothing (
	"type_id" SERIAL PRIMARY KEY,
	"type" VARCHAR (50),
	"water_potential_gal" numeric (20, 2),
	"waste_potential_lbs"  numeric (20, 2)
);

CREATE TABLE closet (
	"item_id" SERIAL PRIMARY KEY,
	"user_id" integer REFERENCES consumer,
	"type_id" integer REFERENCES clothing,
	"name" VARCHAR (40)
);